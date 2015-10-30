//Load Battle function
//This function is used to generate the player and enemy objects for battle,
//along with the UI for the battle screen.
function battleLoad(dungeon,playerObj){

	enemy = new enemy_gen(enemySelect(dungeon), skillsLibrary);
	console.log(enemy);
	slayer = new player_gen(playerObj);
	
	slayer.battleStart();	
	$('.battleWindow').empty();
	statsWindowUpdate();	
	$('button').removeClass('gameover');
	$('.playerStats div').removeClass('gameover');
	$('#HPbar').removeClass('gameover');
	$('#MPbar').removeClass('gameover');
	$('.enemyStats div').removeClass('gameover');
	$('#statsWindowWrapper').removeClass('gameover');
	$('#play').addClass('gameover');
	$('#load').addClass('gameover');
	$('#save').addClass('gameover');
	$('#dungeon1').addClass('gameover');
	$('#dungeon2').addClass('gameover');
	$('#dungeon3').addClass('gameover');
	$('#quit').addClass('gameover');
	$('#newGame').addClass('gameover');
	enemy.battleStart();
	statsPrint();
	
};

