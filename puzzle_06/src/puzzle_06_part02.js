const cephalod = require("./input.js")

let operations = cephalod.split('\n')

console.log(realizeoperation(operations))



function realizeoperation(operations){
    let reorganizedcephalopod = Array()
    let number = ''
    let grandtotal =  0
    let position = 0
    let sum = false
    let multi = false
    let calc = 0
    for (let j = operations[0].length-1; j >= 0; j--){
        number = ''

        for (let i =0; i<(operations.length);i++){
            if(operations[i][j] === undefined || operations[i][j] === ' '){
                continue
            }
            if(operations[i][j] === '+'){
                sum = true
                continue
            }
            if(operations[i][j]==='*'){
                multi = true
                continue
            }
            number += operations[i][j]

        }
        console.log(number)
        if(number!=''){
        reorganizedcephalopod[position] = Number(number)
        position ++
        }
        if(sum){
            for (let k = 0; k < position; k++){
                calc += reorganizedcephalopod[k]
            }
            position = 0
            console.log(calc)
            sum = false
            grandtotal+=calc
            calc = 0
        }
        if(multi){
            calc=1
            for (let k = 0; k < position; k++){
                calc *= reorganizedcephalopod[k]
            }
            console.log(calc)
            position = 0
            multi = false
            grandtotal+=calc
            calc = 0
        }
    } 
    
    return grandtotal
}

//37714197335445810