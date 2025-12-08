const batteries = require ('./input.js');
const bankofbattery = batteries.split('\n');


let sumofvoltage = 0;
let highestvoltage = 0;
let voltagestringlenght = 12;
let highestvoltagestring = '';
let position = 1;
for (let bank of bankofbattery)
    {
        highestvoltagestring = ''
        let i = 0;
        voltagestringlenght = 12;
        while(i < bank.length){//percorrer cada caractere da string
            highestvoltage = parseInt(bank[i]);
            for (let j = 1; j <= bank.length-i-voltagestringlenght; j++){
                if (highestvoltage < parseInt(bank[i+j])){
                    highestvoltage = parseInt(bank[i+j]);
                    position = j +1;
                }
                if (j == bank.length - voltagestringlenght -i){
                    highestvoltagestring += String(highestvoltage);
                    voltagestringlenght -=1;
                    break;
                }
            }
            i += position;
            position = 1;
            if(voltagestringlenght == bank.length - i){
                highestvoltagestring += String(bank.substring(i));
                break;
            }
            if(voltagestringlenght == 0){
                break;
            }
        }
        console.log(highestvoltagestring)
        sumofvoltage += parseInt(highestvoltagestring);

    }
    console.log("Sum of highest voltages:", sumofvoltage);

    