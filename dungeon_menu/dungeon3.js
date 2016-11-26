//Enemy object: goblin
//The enemy objects are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
var zombie = {
	type : "enemy",
    name : "Zombie",
	str : 80,
	agil : 20,
	int : 0,
    maxHP : 150,
    HP : 0,
	expHP : 5,
	expstr : 4,
	expgold : 20,
    expint : 0,
    expMP : 0,
	expAGI : 1,
	block: 1,
	loAttDiag : " scratches you",
	hiAttDiag : " bites you",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

var werewolf = {
	type : "enemy",
    name : "Werewolf",
	str : 120,
	agil : 80,
	int : 2,
    maxHP : 250,
    HP : 0,
	expHP : 8,
	expstr : 6,
	expgold : 40,
    expint : 2,
    expMP : 2,
	expAGI : 5,
	block: 1,
	loAttDiag : " scratches you",
	hiAttDiag : " runs towards you, bites you",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

var vampire = {
	type : "enemy",
    name : "Vampire",
	str : 100,
	agil : 100,
	int : 20,
    maxHP : 400,
    HP : 0,
	expHP : 20,
	expstr : 10,
	expgold : 60,
    expint : 10,
    expMP : 10,
	expAGI : 8,
	block: 1,
	loAttDiag : " cuts you with its claws",
	hiAttDiag : " bites you, sucks blood from you",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

//Enemy constructor: dragon
//The enemy constructors are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties

var demon = {
	type : "enemy",
    name : "Hell Demon",
	str : 200,
	agil : 200,
	int : 50,
    maxHP : 1000,
    HP : 0,
	expHP : 100,
	expstr : 10,
	expgold : 500,
    expint : 20,
    expMP : 20,
	expAGI : 15,
	block: 1,
	loAttDiag : " hits you with its tail",
	hiAttDiag : " attacks you with its fire breath",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

var dungeon3 = [[zombie,werewolf,vampire],demon];