const charGenBtn = document.querySelector(".char_gen");
const charPage = document.querySelector(".char")

const name = document.querySelector(".p_name");
const nameBtn = document.querySelector(".btn_name");
const race = document.querySelector(".p_race");
const raceBtn = document.querySelector(".btn_race")
const charClass = document.querySelector(".p_class");
const classBtn = document.querySelector(".btn_class")


classBtn.addEventListener('click', randomClass);
raceBtn.addEventListener('click', randomRace);
charGenBtn.addEventListener('click', generateChar);

function randomRace() {
    const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
    race.innerHTML = 'Race: ' + races[Math.floor(Math.random() * 9)];
}

function randomClass(){
    const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    charClass.innerHTML = 'Class: ' + classes[Math.floor(Math.random() * 12)];
}

function generateChar(){
    charPage.classList.remove('hide')
    
    randomRace();
    randomClass();
}

