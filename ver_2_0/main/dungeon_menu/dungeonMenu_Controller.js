$(document).ready(function() {
	
	var currentDungeon = [];
	//Select dungeon 1 button click function
	$('#dungeon1').click(function(){
		currentDungeon = dungeon1;
		battleLoad(currentDungeon,player);		
	});
	
	//Select dungeon 2 button click function
	$('#dungeon2').click(function(){
		currentDungeon = dungeon2;
		battleLoad(currentDungeon,player);
	});
	
	//Select dungeon 3 button click function
	$('#dungeon3').click(function(){
		currentDungeon = dungeon3;
		battleLoad(currentDungeon,player);
	});
	
	//Click on Save button function
	$('#save').click(function(){		
		saveData(player);				
	});
	
	//Click on quit button function	
	$('#quit').click(function(){	
		mainScreen();	
		enemiesDef = 0;
	});
	
	$('#play').click(function(){
				
		if (enemiesDef>0) {
						
			battleLoad(currentDungeon,player);
			
		}
		
		else {
			selectDungeon();
		}
	});

});