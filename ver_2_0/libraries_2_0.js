var enemiesDef = 0;

//Win function
//Whenever called, the function appends a dialog to the battle window
//congratulating the player for defeating the enemy
//Calls the gameOver function

function win(){
    $winDialog=$('<div></div>');
    $winDialog.html("Boom! Enemy Slayed!").addClass('green');
    $(".battleWindow").append($winDialog);
	enemiesDef += 1;
	if (enemiesDef > 5){
		dungeonFinished();
	}
    gameOver();
}

//Lose function
//Whenever called, the function appends a dialog to the battle window
//informing the player of his defeat
//Calls the gameOver function

function lose(){
    $loseDialog=$('<div></div>');
    $loseDialog.html("Lolz! you is dead").addClass('red');
    $(".battleWindow").append($loseDialog);
	enemiesDef = 0;
    gameOver();
}

//Game Over function
//Whenever called, it add the style class gameover to all the buttons, player and enemy stats, which hides them,
//and it removes the gameover class from the button with id 'play', also changing its string html content to ask the player
//if he wants to 'Play again?'

function gameOver(){
    $('button').addClass('gameover');
    $('#play').removeClass('gameover');
	$('#save').removeClass('gameover');
    $('.playerStats div').addClass('gameover');
    $('#enemyhp').addClass('gameover');
    $('#play').html('Continue?');
}

//Enemy defeated function
//This function performs as a 'level up' for the player, and it's called every time the player defeats an enemy.
//Every enemy object includes reward properties for experience obtained when defetead (enemy.expXXX), that when defeated,
//are then added to the player's object own respective properties.

function defeat(){
    player.maxHP = player.maxHP+enemy.expHP;
    player.str = player.str+enemy.expstr;
    player.gold = player.gold+enemy.expgold;
    player.int = player.int+enemy.expint;
    player.maxMP = player.maxMP+enemy.expMP;
	
}
//Current Battle Statistics Printing function
//This function updates the current html values of the battle statistics, and it's called at the end of every turn, and 
//at the beginning of a battle
function statsPrint(){
    $('#playerhp').html('HP: '+slayer.HP);
    $('#playermp').html('MP: '+slayer.MP);
    $('#potions').html('Potions: '+slayer.potions);
    $('#enemyhp').html('enemyHP: '+enemy.HP);
}
//Player Attribute Stats Window update function
//This function prints the values of the player's object attributes into the statsWindow,
// and it's called at the beginning of every battle.
/*Note: This function should be DRYied, by replacing some of these statements with a loop, and it could also be generalized
by making it have an object as an input, for future uses of the same window as a display for other properties */
function statsWindowUpdate(){
	$('#statsWindow').empty();
	var maxHPstat = 'MAX HP: '+player.maxHP;
	var maxMPstat = 'MAX MP: '+player.maxMP;
	$statsTitle=$('<div></div>');
    $statsTitle.html("Slayer").addClass('red');
    $("#statsWindow").append($statsTitle);
	$statsList=$('<ul></ul>');
	$statsList.css('list-style', 'none').css('margin','0px').css('padding','0px');
	$statsListSTR=$('<li></li>');
	$statsListSTR.html('STR: '+player.str);
	$statsListINT=$('<li></li>');
	$statsListINT.html('INT: '+player.int);
	$statsListHP=$('<li></li>');
	$statsListHP.html('MAX HP: '+player.maxHP);
	$statsListMP=$('<li></li>');
	$statsListMP.html('MAX MP: '+player.maxMP);
	$statsList.append($statsListSTR).append($statsListINT).append($statsListHP).append($statsListMP);
	$("#statsWindow").append($statsList);
};

//Hit or Miss function
//During a battle, this function is used to determine if an attack lands or misses, by returning a logic true for a hit
// and a logic false for a miss. This function is called for both player
// and enemy attacks, and it uses their agility attribute to determine if the attack misses. If the attacker has a higher agility
//attribute, its attacks always hit, but if its agility is lower, the percentage chance of a miss is equal to the difference.
function hitOrMiss (attacker,defender){
	if (100*Math.random() > (defender.agil-attacker.agil)){
		return true;
	}
	else {
		return false;
	}
};

//Attack missed function
//This function adds a dialog to the battlewindow indicating that the attack was missed.
function missed (){
	$missedDialog = $('<div></div>');
	$missedDialog.html('The attack missed!').addClass('red');
	$(".battleWindow").append($missedDialog);
};

//Enemy Turn function
//This function is called whenever it is the turn of the enemy during a battle.
function enemyTurn(){
	if(slayer.turn){
			enemy.Action();
			
			if(slayer.HP <= 0){
				lose();
			}
			slayer.mp_regen();
		}
		
	statsPrint();

};

//Enemy Selection function
//This function is used to randomly select an enemy from the current Dungeon
//enemy array, unless 5 enemies have been defeated, in which case the Boss enemy
//gets selected.
function enemySelect(enemyArray){
	if (enemiesDef < 5){
			
			var enemyIndex = Math.floor(Math.random()*(enemyArray[0].length));
			return enemyArray[0][enemyIndex];
			
		}
	else {
		return enemyArray[1];
	}
};

//Dungeon completed/finished function
//This function generates a contratulatory message, and resets the enemies defeated to 0.
//It is called when the Boss of a dungeon has been defeated.
function dungeonFinished (){
	$Dialog = $('<div></div>');
	$Dialog.html('Congratulations! You have cleared this dungeon!').addClass('red');
	$(".battleWindow").append($Dialog);
	enemiesDef = 0;
	
};

//Save function
//This function saves the current player object into the localstorage for HTML5
//It converts the player object into a JSON string, saves it into local storage
//and displays a Saved message on the save button.
function saveData(player){

	var newJSON = JSON.stringify(player);    
    localStorage.setItem("localsaveRPG", newJSON);
	$('#save').html("Saved!");
}

//Load function
//This function loads the saved player object into the game for continued progress
//It saves the JSON string into a variable, which is then parsed and assigned to the
//player object.
function loadData(){
	var lsave = localStorage.getItem("localsaveRPG");
    var player =JSON.parse(lsave);
	$('#load').html("Success!");
	$('#play').html("Continue");
	return player;
}

//Load Battle function
//This function is used to generate the player and enemy objects for battle,
//along with the UI for the battle screen.
function battleLoad(dungeon,playerObj){

	enemy = new enemy_gen(enemySelect(dungeon));
	slayer = new player_gen(playerObj);
	slayer.battleStart();
	
	$('.battleWindow').empty();
	statsWindowUpdate();
	//remove play button, show attack and heal button
	$('button').removeClass('gameover');
	$('.playerStats div').removeClass('gameover');
	$('.enemyStats div').removeClass('gameover');
	$('#statsWindowWrapper').removeClass('gameover');
	$('#play').addClass('gameover');
	$('#load').addClass('gameover');
	$('#save').addClass('gameover');
	$('#dungeon1').addClass('gameover');
	$('#dungeon2').addClass('gameover');
	$('#dungeon3').addClass('gameover');
	enemy.battleStart();
	statsPrint();
}

//Select Dungeon function
//This function removes buttons from the UI, and leaves the dungeon buttons visible
//for selection.
function selectDungeon (){
	$('.battleWindow').empty();
	$('.battleWindow').html("Choose a dungeon!");
	// show dungeon buttons
	$('button').removeClass('gameover'); // rename gameover class to "hide" or something like that
	$('#play').addClass('gameover');
	$('#load').addClass('gameover');
	$('#save').addClass('gameover');
	$('#heal').addClass('gameover');
	
	$('#loattack').addClass('gameover');
	$('#hiattack').addClass('gameover');
	$('#block').addClass('gameover');
}