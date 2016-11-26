
//The enemy objects are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
var rattleSnake = {
	type : "enemy",
    name : "Rattle Snake",
	str : 20,
	agil : 10,
	int : 5,
    maxHP : 50,
    HP : 0,
	expHP : 2,
	expstr : 1,
	expgold : 10,
    expint : 1,
    expMP : 0,
	expAGI : 0,
	block: 1,
	loAttDiag : " bites you",
	hiAttDiag : " bites you fiercely",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

var eagle = {
	type : "enemy",
    name : "Bald Eagle",
	str : 30,
	agil : 25,
	int : 5,
    maxHP : 100,
    HP : 0,
	expHP : 2,
	expstr : 1,
	expgold : 10,
    expint : 1,
    expMP : 0,
	expAGI : 0,
	block: 1,
	loAttDiag : " attacks you with its talons",
	hiAttDiag : " picks you up and throws you off a cliff",
	skillnames : ["loAttack","hiAttack"]
	
}

var coyote = {
	type : "enemy",
    name : "Coyote",
	str : 30,
	agil : 20,
	int : 2,
    maxHP : 80,
    HP : 0,
	expHP : 2,
	expstr : 4,
	expgold : 10,
    expint : 0,
    expMP : 0,
	expAGI : 2,
	block: 1,
	loAttDiag : " scratches you",
	hiAttDiag : " runs and bites you",
	skillnames : ["loAttack", "hiAttack"]
	
}

var buffalo = {
	type : "enemy",
    name : "Buffalo",
	str : 50,
	agil : 20,
	int : 0,
    maxHP : 120,
    HP : 0,
	expHP : 20,
	expstr : 6,
	expgold : 15,
    expint : 0,
    expMP : 0,
	expAGI : 2,
	block: 1,
	loAttDiag : " dashes at you",
	hiAttDiag : " runs and attacks you with its horns", 
	skillnames : ["loAttack", "hiAttack"]
	
}


//The Dungeon Boss

var bear = {
	type : "enemy",
    name : "Bear",
	str : 60,
	agil : 30,
	int : 5,
    maxHP : 250,
    HP : 0,
	expHP : 20,
	expstr : 10,
	expgold : 30,
    expint : 0,
    expMP : 4,
	expAGI : 3,
	block: 1,
	loAttDiag : " punches you with its claws",
	hiAttDiag : " bites you",
	skillnames : ["loAttack","hiAttack", "miasma"]
	
}

var dungeon1 = [[rattleSnake,coyote,buffalo, eagle],bear];