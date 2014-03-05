$(document).ready(function() {
	
	var currentDungeon = [];
	
//Play button click function

	$('#play').click(function(){
				
		if (enemiesDef>0) {
			enemy = new enemy_gen(enemySelect(currentDungeon));
			slayer = new player_gen(player);
			slayer.battleStart();
			
			$('.battleWindow').empty();
			statsWindowUpdate();
			//remove play button, show attack and heal button
			$('button').removeClass('gameover');
			$('.playerStats div').removeClass('gameover');
			$('.enemyStats div').removeClass('gameover');
			$('#play').addClass('gameover');
			$('#load').addClass('gameover');
			$('#save').addClass('gameover');
			$('#dungeon1').addClass('gameover');
			$('#dungeon2').addClass('gameover');
			$('#dungeon3').addClass('gameover');
			enemy.battleStart();
			statsPrint();
		}
		
		else {
			$('.battleWindow').empty();
			$('.battleWindow').html("Choose a dungeon!");
			// show dungeon buttons
			$('button').removeClass('gameover'); // rename gameover class to "hide" or something like that
			$('#play').addClass('gameover');
			$('#load').addClass('gameover');
			$('#save').addClass('gameover');
			$('#heal').addClass('gameover');
			$('#potion').addClass('gameover');
			$('#loattack').addClass('gameover');
			$('#hiattack').addClass('gameover');
			$('#block').addClass('gameover');
		}
	});
//Select dungeon 1
	$('#dungeon1').click(function(){
		currentDungeon = dungeon1;
		enemy = new enemy_gen(enemySelect(currentDungeon));
		slayer = new player_gen(player);
		slayer.battleStart();
		
		$('.battleWindow').empty();
		statsWindowUpdate();
		//remove play button, show attack and heal button
		$('button').removeClass('gameover');
		$('.playerStats div').removeClass('gameover');
		$('.enemyStats div').removeClass('gameover');
		$('#play').addClass('gameover');
		$('#load').addClass('gameover');
		$('#save').addClass('gameover');
		$('#dungeon1').addClass('gameover');
		$('#dungeon2').addClass('gameover');
		$('#dungeon3').addClass('gameover');
		enemy.battleStart();
		statsPrint();
	});
	
	$('#dungeon2').click(function(){
		currentDungeon = dungeon2;
		enemy = new enemy_gen(enemySelect(currentDungeon));
		slayer = new player_gen(player);
		slayer.battleStart();
		
		$('.battleWindow').empty();
		statsWindowUpdate();
		//remove play button, show attack and heal button
		$('button').removeClass('gameover');
		$('.playerStats div').removeClass('gameover');
		$('.enemyStats div').removeClass('gameover');
		$('#play').addClass('gameover');
		$('#load').addClass('gameover');
		$('#save').addClass('gameover');
		$('#dungeon1').addClass('gameover');
		$('#dungeon2').addClass('gameover');
		$('#dungeon3').addClass('gameover');
		enemy.battleStart();
		statsPrint();
	});
	
	$('#dungeon3').click(function(){
		currentDungeon = dungeon3;
		enemy = new enemy_gen(enemySelect(currentDungeon));
		slayer = new player_gen(player);
		slayer.battleStart();
		
		$('.battleWindow').empty();
		statsWindowUpdate();
		//remove play button, show attack and heal button
		$('button').removeClass('gameover');
		$('.playerStats div').removeClass('gameover');
		$('.enemyStats div').removeClass('gameover');
		$('#play').addClass('gameover');
		$('#load').addClass('gameover');
		$('#save').addClass('gameover');
		$('#dungeon1').addClass('gameover');
		$('#dungeon2').addClass('gameover');
		$('#dungeon3').addClass('gameover');
		enemy.battleStart();
		statsPrint();
	});
	
	$('#save').click(function(){
		
		saveData(player);
		$(this).html("Saved!");
		
	});
	
	$('#load').click(function(){
		
		player = loadData();
		$(this).html("Success!");
		$('#play').html("Continue");
		
	});

});