//Enemy object: goblin
//The enemy objects are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
var goblin = {
	type : "enemy",
    name : "Goblin",
	str : 40,
	agil : 20,
	int : 5,
    maxHP : 100,
    HP : 0,
	expHP : 5,
	expstr : 4,
	expgold : 20,
    expint : 2,
    expMP : 2,
	expAGI : 1,
	block: 1,
	loAttDiag : " mashes you with its club",
	hiAttDiag : " runs and headbutts you",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

var orc = {
	type : "enemy",
    name : "Orc",
	str : 70,
	agil : 30,
	int : 2,
    maxHP : 200,
    HP : 0,
	expHP : 8,
	expstr : 6,
	expgold : 30,
    expint : 1,
    expMP : 1,
	expAGI : 1,
	block: 1,
	loAttDiag : " slashes you with a sword",
	hiAttDiag : " swings its axe at you",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

var ogre = {
	type : "enemy",
    name : "Ogre",
	str : 100,
	agil : 50,
	int : 2,
    maxHP : 300,
    HP : 0,
	expHP : 10,
	expstr : 10,
	expgold : 0,
    expint : 0,
    expMP : 0,
	expAGI : 2,
	block: 1,
	loAttDiag : " punches you",
	hiAttDiag : " smashes you to the ground",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

//Enemy constructor: dragon
//The enemy constructors are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties

var dragon = {
	type : "enemy",
    name : "Dragon",
	str : 150,
	agil : 100,
	int : 20,
    maxHP : 450,
    HP : 0,
	expHP : 20,
	expstr : 15,
	expgold : 100,
    expint : 5,
    expMP : 5,
	expAGI : 10,
	block: 1,
	loAttDiag : " hits you with its tail",
	hiAttDiag : " attacks you with its fire breath",
	skillnames : ["loAttack","flame","hiAttack"]
	
}

var dungeon2 = [[goblin,orc,ogre],dragon];