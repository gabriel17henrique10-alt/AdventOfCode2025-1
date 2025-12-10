const cephalod = require("./input.js")

let operations = cephalod.split('\n')
for (let i = 0; i < operations.length; i++){
    operations[i] = operations[i].split(' ')
    operations[i] = operations[i].filter(x => x !== '')
}
console.log(realizeoperation(operations))

function realizeoperation(operations){
    let grandtotal =  0
    for (let j = 0; j < operations[0].length; j++){
        let  calc = 0
            if(operations[operations.length-1][j] == '+'){
                for(let i = 0; i < (operations.length)-1; i++){
                    calc += Number(operations[i][j])
                }
            } else if(operations[operations.length-1][j] === '*'){
                calc = 1
                for(let i = 0; i < (operations.length)-1; i++){
                    calc *= Number(operations[i][j])
                }
            }
            grandtotal += calc
    }
    return grandtotal
}