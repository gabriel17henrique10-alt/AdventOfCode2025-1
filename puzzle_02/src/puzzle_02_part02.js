const varID = require('./varID.js');

const IDs = varID.split(',');
let adder = 0;
for (let ID of IDs) {
    for (let i = parseInt(ID.substring(0,ID.indexOf('-'))); i <= parseInt(ID.substring(ID.indexOf('-')+1)); i++) {
        let currentID = i.toString();
        for (let j = 1; j <= currentID.length/2; j++) {
            let times = currentID.length/j;
            for (let k = 1; k < times; k++) {
                if (currentID.substring(0,j) != currentID.substring(k*j, (k+1)*j)) {
                    break;
                }
                if (k == times -1) {
                    console.log("invalid ID:", currentID);
                    adder += parseInt(currentID);
                    j = currentID.length/2 + 1; //sai do loop externo 
                }
            }
        }
    }
}
console.log("sum of invalid ID:", adder);