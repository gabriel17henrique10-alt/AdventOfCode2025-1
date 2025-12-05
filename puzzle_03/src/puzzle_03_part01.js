const batteries = require ('./input.js');
const bankofbattery = batteries.split('\n');


let sumofvoltage = 0;
let highestvoltage = 0;
for (let bank of bankofbattery)
    {
        highestvoltage = 0;
        for (let i = 0; i < bank.length-1; i++)
        {
            for (let j = i+1; j < bank.length; j++)
            {
                if (highestvoltage < parseInt(String(bank[i]) + String(bank[j]))){
                    highestvoltage = parseInt(String(bank[i]) + String(bank[j]));
                }
            }
        }
        sumofvoltage += highestvoltage;
    }
    console.log("Sum of highest voltages:", sumofvoltage);