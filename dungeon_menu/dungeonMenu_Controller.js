$(document).ready(function() {
	
	var currentDungeon = [];
	//Select dungeon 1 button click function
	$('#dungeonMenu-button-dungeon1').click(function(){
		currentDungeon = dungeon1;
		player.HP=player.maxHP;
		player.MP=player.maxMP;
		battleLoad(currentDungeon,player);		
	});
	
	//Select dungeon 2 button click function
	$('#dungeonMenu-button-dungeon2').click(function(){
		currentDungeon = dungeon2;
		player.HP=player.maxHP;
		player.MP=player.maxMP;
		battleLoad(currentDungeon,player);
	});
	
	//Select dungeon 3 button click function
	$('#dungeonMenu-button-dungeon3').click(function(){
		currentDungeon = dungeon3;
		player.HP=player.maxHP;
		player.MP=player.maxMP;
		battleLoad(currentDungeon,player);
	});
	
	//Click on Save button function
	$('#endOfBattleMenu-button-save').click(function(){		
		saveData(player);				
	});
	
	//Click on quit button function	
	$('#endOfBattleMenu-button-quit').click(function(){	
		mainScreen();	
		enemiesDef = 0;
	});
	
	$('#titleScreenMenu-button-play').click(function(){
				
		if (enemiesDef>0) {
						
			battleLoad(currentDungeon,player);
			
		}
		
		else {
			selectDungeon();
		}
	});

});