//Initialize Player object
var player = new Object;

var newPlayer = {
	type: "player",
	name: "Rockstar Slayer",
    str:40,	//Determines physical attacks damage
    int:5,	//Determines Magic/non-physical attacks damage
	agil:5,		//Determines if a an attack lands or misses
    
    maxHP:100,	//Current maximum hit points
    HP:0,	//Initializes and holds current hit points
    maxMP:20,	//Current maximum Magic/abilities points
    MP:0,	//Initializes and holds current m points
    gold:0,	//Initializes and holds current gold
	block:1,	//holds current blocking ratio
	turn:false,	//holds a flag to determine player's turn
	skillnames: ["loAttack", "hiAttack", "heal", "guard", "miasma","flame"]
};

