$(document).ready(function() {
	
	mainScreen();
	console.log(player);
	
	
	if(!localStorage.getItem("localsaveRPG"))
	{
		$('#titleScreenMenu-button-loadGame').addClass('element-hide');
	}
	
	$('#titleScreenMenu-button-loadGame').click(function(){		
		player = loadData();
		console.log(player);				
	});
	
	$('#titleScreenMenu-button-newGame').click(function(){	
		player = newPlayer;
		newGame();
		console.log(player);		
	});
			
	
});