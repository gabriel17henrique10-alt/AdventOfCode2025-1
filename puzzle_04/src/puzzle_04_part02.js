const rollsofpapers = require('./input.js')

let countofvalidrollsofpapers = 0
let totalofcount = 0
do{totalofcount += gotothroughrollsofpapers(rollsofpapers)
}while(countofvalidrollsofpapers != 0)

console.log("The total count of valis rolls of papers is:", totalofcount)

function gotothroughrollsofpapers(rollsofpapers) {
    countofvalidrollsofpapers = 0
    for (let i = 0; i < rollsofpapers.length; i += 1) {
        for (let j = 0; j < rollsofpapers[i].length; j += 1) {
            if(rollsofpapers[i][j] === '.') {
                continue
            }
            if(checkrollsofpapers(rollsofpapers, i, j)){
                countofvalidrollsofpapers += 1
                rollsofpapers[i][j] ='x'
            }
        }
    }
    removevalidrollsofpapers(rollsofpapers)
    return countofvalidrollsofpapers
}
function checkrollsofpapers(rollsofpapers, i, j) {
    let count = 0
    for (let k = i-1; k <= i+1; k++) {
        if (k>=0 && k < rollsofpapers.length){
            for (let l = j-1; l <= j+1; l++) {
                if(l>=0 && (k!= i || l!= j) && l < rollsofpapers[i].length){
                    if(rollsofpapers[k][l] == '@'|| rollsofpapers[k][l] == 'x') {
                        count += 1
                    }
                }
            }
        }
    }
    if (count < 4){
        return true
    }
    return false
}
function removevalidrollsofpapers(rollsofpapers) {
    for(rolls in rollsofpapers){
            rollsofpapers[rolls] = rollsofpapers[rolls].map(function(remove){
            return remove.replace('x', '.')
        })}
}

