const rollsofpapers = require('./input.js')

function gotothroughrollsofpapers(rollsofpapers) { //this is a function that goes through the rolls of papers and counts the valid ones
    let countofvalidrollsofpapers = 0
    for (let i = 0; i < rollsofpapers.length; i += 1) {
        for (let j = 0; j < rollsofpapers[i].length; j += 1) {
            if(rollsofpapers[i][j] === '.') {
                continue
            }
            if(checkrollsofpapers(rollsofpapers, i, j)){
                countofvalidrollsofpapers += 1
            }
        }
    }

    console.log("The count of valis rolls of papers is:", countofvalidrollsofpapers)
}

function checkrollsofpapers(rollsofpapers, i, j) { //that is a fhunction that chacks if the roll is valid
    let count = 0
    for (let k = i-1; k <= i+1; k++) {
        if (k>=0 && k < rollsofpapers.length){
            for (let l = j-1; l <= j+1; l++) {
                if(l>=0 && (k!= i || l!= j) && l < rollsofpapers[i].length){
                    if(rollsofpapers[k][l] == '@') {
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
gotothroughrollsofpapers(rollsofpapers)

