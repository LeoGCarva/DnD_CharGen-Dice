import { diceResultP } from "./const.js";

export function throwDice(){
    const optionValue = document.querySelector('.dices');
    const index = optionValue.selectedIndex;

    switch (index){
        case 0:
            diceResultP.innerHTML = `Result: ${Math.floor(Math.random() * 4) + 1}`;
        break;

        case 1:
            diceResultP.innerHTML = `Result: ${Math.floor(Math.random() * 6) + 1}`;
        break;

        case 2:
            diceResultP.innerHTML = `Result: ${Math.floor(Math.random() * 8) + 1}`;
        break;
        
        case 3:
            diceResultP.innerHTML = `Result: ${Math.floor(Math.random() * 12) + 1}`;
        break;

        case 4:
            diceResultP.innerHTML = `Result: ${Math.floor(Math.random() * 20) + 1}`;
        break;
        
        case 5:
            diceResultP.innerHTML = `Result: ${Math.floor(Math.random() * 100) + 1}`;
        break;
    }
}