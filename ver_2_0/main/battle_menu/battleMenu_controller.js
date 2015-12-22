//Battle Window manipulation Script
//This script is used to manipulate the HTML content during a battle.
//It includes functions and behaviour that is activated whenever each of the different action buttons
//are clicked, and include calls to both the player and enemies object methods, along with other functions 
//included in the libraries scripts.

$(document).ready(function() {
	
	//Player Weak attack button click function
	//Whenever the 'Attack' button is pressed, this function gets executed.
	//This function first empties the content of the battleWindow.
				 
	$('#battleMenu-button-loattack').click(function(){
		$('#battleWindow').empty();
		 
		slayer.loAttack(hitOrMiss(slayer,enemy));			
		statsPrint();
		
		if(enemy.HP <= 0){	//It then checks if the enemy has been defeated, which if true, executes the win() and defeat() functions.  
			win();			
			defeat();
		}
		else{
			enemyTurn(enemy, slayer);	//Else, it executes the enemyTurn() function
		}
				
	});
    
	
	//Player Strong attack button click function
	//Whenever the 'Str Attack' button is pressed, this function gets executed.
	//This function is identical to the .loattack click function, but it calls the slayer.hiAttack() method instead.
	
	$('#battleMenu-button-hiattack').click(function(){
		$('#battleWindow').empty();
		
		slayer.hiAttack(hitOrMiss(slayer,enemy));
		statsPrint();
		
		if(enemy.HP <= 0){
			win();
			defeat();
		}
		else{
			enemyTurn(enemy, slayer);
		}
		
	});
	
	//Player Blocking button click function
	//This function first empties the battleWindow
	$('#battleMenu-button-guard').click(function(){
		$('#battleWindow').empty();
		slayer.blocking();		//Then executes the slayer.blocking() method		
		enemyTurn(enemy, slayer);
		
	});
	
	//Player Heal button click function
	//This function is very similar to the blocking function, but it performs a slayer.heal() method instead.
	$('#battleMenu-button-heal').click(function(){
		$('#battleWindow').empty();
		slayer.heal();		
		enemyTurn(enemy, slayer);
		
	});
		
});