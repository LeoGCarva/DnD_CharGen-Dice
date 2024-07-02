import { charGenBtn, charPage, nameBtn, raceBtn, classBtn, throwBtn, dicePage, diceBtn, diceResultP } from './const.js'
import { randomRace, randomClass, randomName } from './charFunctions.js';
import { throwDice } from './diceFunctions.js';

nameBtn.addEventListener('click', randomName);
classBtn.addEventListener('click', randomClass);
raceBtn.addEventListener('click', randomRace);
charGenBtn.addEventListener('click', generateCharShow);
throwBtn.addEventListener('click', throwDice)
diceBtn.addEventListener('click', dicePageShow)


function generateCharShow(){
    charPage.classList.remove('hide')
    dicePage.classList.add('hide')
    diceResultP.innerHTML = ''
    
    randomRace();
    randomClass();
    randomName();
}

function dicePageShow(){
    charPage.classList.add('hide')
    dicePage.classList.remove('hide')
    diceResultP.innerHTML = ''
}