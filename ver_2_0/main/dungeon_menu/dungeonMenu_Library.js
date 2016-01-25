//Load Battle function
//This function is used to generate the player and enemy objects for battle,
//along with the UI for the battle screen.
function battleLoad(dungeon,playerObj){

	enemy = new enemy_gen(enemySelect(dungeon), skillsLibrary);
	console.log(enemy);
	slayer = new player_gen(playerObj, skillsLibrary);
		
	$('#battleWindow').empty();
	statsWindowUpdate();	
	$('button').removeClass('element-hide');
	$('#HUD-playerStats div').removeClass('element-hide');
	$('#HUD-HPbar').removeClass('element-hide');
	$('#HUD-MPbar').removeClass('element-hide');
	$('#HUD-enemyStats div').removeClass('element-hide');
	$('#HUD-statsWindowWrapper').removeClass('element-hide');
	$('#titleScreenMenu-button-play').addClass('element-hide');
	$('#titleScreenMenu-button-loadGame').addClass('element-hide');
	$('#endOfBattleMenu-button-save').addClass('element-hide');
	$('#dungeonMenu-button-dungeon1').addClass('element-hide');
	$('#dungeonMenu-button-dungeon2').addClass('element-hide');
	$('#dungeonMenu-button-dungeon3').addClass('element-hide');
	$('#endOfBattleMenu-button-quit').addClass('element-hide');
	$('#titleScreenMenu-button-newGame').addClass('element-hide');
	slayer.initializeSkills(slayer, enemy);
	
	enemy.battleStart();
	statsPrint();
	
};

