const kitchendatabase = require("./input.js");

const ids = (kitchendatabase.substring(0,kitchendatabase.indexOf('\n\n'))).split('\n') 
const listitens = (kitchendatabase.substring(kitchendatabase.indexOf('\n\n')+2)).split('\n') 
let count = 0
console.log("The count of fresh items is:", isfreshitem(ids, listitens))
function isfreshitem(ids, listitem){
    for (let itens of listitens){
        let iditemlist = Number(itens)
        for (let  id of ids){
            let firstid = Number(id.substring(0, id.indexOf('-')))
            let secondid = Number(id.substring(id.indexOf('-')+1))
        
            if (iditemlist >= firstid && iditemlist <= secondid){
                count +=1
                break;
            }
        }
    }
    return count
}
