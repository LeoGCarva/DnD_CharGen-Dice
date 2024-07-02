import { name, race, charClass } from "./const.js";

export function randomRace() {
    const races = ['Dragonborn', 'Dwarf', 'Elf', 'Gnome', 'Half-Elf', 'Halfling', 'Half-Orc', 'Human', 'Tiefling'];
    race.innerHTML = 'Race: ' + races[Math.floor(Math.random() * races.length)];
}

export function randomClass(){
    const classes = ['Barbarian', 'Bard', 'Cleric', 'Druid', 'Fighter', 'Monk', 'Paladin', 'Ranger', 'Rogue', 'Sorcerer', 'Warlock', 'Wizard'];
    charClass.innerHTML = 'Class: ' + classes[Math.floor(Math.random() * classes.length)];
}

export function randomName(){
    const names = ['Arthur', 'Lancelot', 'Gawain', 'Tristan', 'Galahad', 'Percival', 'Merlin', 'Godefroy', 'Hugues', 'Geoffroy', 
                    'Guinevere', 'Isolde', 'Morgana', 'Elaine', 'Nimue', 'Igraine', 'Eleanor', 'Melisende', 'Aveline', 'Yseult']
    const surnames = ['Fitzgeral', 'Beauchamp', 'Montgomery', 'Percy', 'Neville', 'Devereux', 'Lancaster', 'Clifford', 'Mortimer', 'Fitzroy']
    name.innerHTML = 'Name: ' + names[Math.floor(Math.random() * names.length)] + ' ' + surnames[Math.floor(Math.random() * surnames.length)]
}