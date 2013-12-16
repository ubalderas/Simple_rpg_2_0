//Enemy object: goblin
//The enemy objects are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
var goblin = {
    name : "Goblin",
	str : 40,
	agil : 10,
	int : 5,
    maxHP : 100,
    HP : 0,
	expHP : 5,
	expstr : 4,
	expgold : 20,
    expint : 2,
    expMP : 2,
	loAttDiag : " mashes you with its club",
	hiAttDiag : " runs and headbutts you"
	
}

var orc = {
    name : "Orc",
	str : 70,
	agil : 20,
	int : 2,
    maxHP : 200,
    HP : 0,
	expHP : 8,
	expstr : 6,
	expgold : 30,
    expint : 1,
    expMP : 1,
	loAttDiag : " slashes you with a sword",
	hiAttDiag : " swings its axe at you"
	
}

var ogre = {
    name : "Ogre",
	str : 100,
	agil : 30,
	int : 2,
    maxHP : 300,
    HP : 0,
	expHP : 10,
	expstr : 10,
	expgold : 0,
    expint : 0,
    expMP : 0,
	loAttDiag : " punches you",
	hiAttDiag : " smashes you to the ground"
	
}

//Enemy constructor: dragon
//The enemy constructors are used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties

var dragon = {
    name : "Dragon",
	str : 150,
	agil : 50,
	int : 20,
    maxHP : 450,
    HP : 0,
	expHP : 20,
	expstr : 15,
	expgold : 100,
    expint : 5,
    expMP : 5,
	loAttDiag : " hits you with its tail",
	hiAttDiag : " attacks you with its fire breath"
	
}

var dungeon2 = [[goblin,orc,ogre],dragon];