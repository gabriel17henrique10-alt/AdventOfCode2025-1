const varID = require('./varID.js');

const IDs = varID.split(',');
let adder = 0;
for (let ID of IDs) {
    for (let i = parseInt(ID.substring(0,ID.indexOf('-'))); i <= parseInt(ID.substring(ID.indexOf('-')+1)); i++) {
        let currentID = i.toString();
        if (currentID.length % 2 == 0) {
            if(currentID.substring(0, currentID.length/2) == currentID.substring(currentID.length/2)) {
                console.log("invalid ID:", currentID);
                adder += parseInt(currentID);
            }
        }
    }
}
console.log("sum of invalid ID:", adder);

