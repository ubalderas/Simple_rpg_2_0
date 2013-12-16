//Enemy object: goblin
//The enemy objects are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
var zombie = {
    name : "Zombie",
	str : 80,
	agil : 10,
	int : 0,
    maxHP : 150,
    HP : 0,
	expHP : 5,
	expstr : 4,
	expgold : 20,
    expint : 0,
    expMP : 0,
	loAttDiag : " scratches you",
	hiAttDiag : " bites you"
	
}

var werewolf = {
    name : "Werewolf",
	str : 120,
	agil : 50,
	int : 2,
    maxHP : 250,
    HP : 0,
	expHP : 8,
	expstr : 6,
	expgold : 40,
    expint : 2,
    expMP : 2,
	loAttDiag : " scratches you",
	hiAttDiag : " runs towards you, bites you"
	
}

var vampire = {
    name : "Vampire",
	str : 100,
	agil : 60,
	int : 20,
    maxHP : 400,
    HP : 0,
	expHP : 20,
	expstr : 10,
	expgold : 60,
    expint : 10,
    expMP : 10,
	loAttDiag : " cuts you with its claws",
	hiAttDiag : " bites you, sucks blood from you"
	
}

//Enemy constructor: dragon
//The enemy constructors are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties

var demon = {
    name : "Hell Demon",
	str : 200,
	agil : 100,
	int : 50,
    maxHP : 1000,
    HP : 0,
	expHP : 100,
	expstr : 10,
	expgold : 500,
    expint : 20,
    expMP : 20,
	loAttDiag : " hits you with its tail",
	hiAttDiag : " attacks you with its fire breath"
	
}

var dungeon3 = [[zombie,werewolf,vampire],demon];