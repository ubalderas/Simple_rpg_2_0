$(document).ready(function() {
	
	mainScreen();
	console.log(player);
	
	
	if(!localStorage.getItem("localsaveRPG"))
	{
		$('#load').addClass('gameover');
	}
	
	$('#load').click(function(){		
		player = loadData();
		console.log(player);				
	});
	
	$('#newGame').click(function(){	
		player = newPlayer;
		newGame();
		console.log(player);		
	});
			
	
});