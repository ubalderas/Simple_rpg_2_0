skillsLibrary = new Object();

skillsLibrary["flame"] = {
	
	label: "Flame",
	mpRatio: 0.5,
	action : function(attackerObject, attackedObject){
		var damage = Math.max.apply(Math, [Math.floor(Math.random()*10 + attackerObject.int) - attackedObject.block*attackedObject.int, 0]);
		
		$battleDialog = $('<div></div>');
		
		if (attackerObject.type=="enemy"){
			$battleDialog.html("Snap! the "+ attackerObject.name+" spits a flame to you and makes "+damage+" damage!").addClass('red');
			console.log(attackerObject.name+" makes "+damage+ " damage!");
		}
		else{
			$battleDialog.html("Boom! "+ attackerObject.name+" invokes a flame and makes "+damage+" damage!").addClass('green');
			console.log(attackerObject.name+" makes "+damage+ " damage!");
		}
		
		$("#battleWindow").append($battleDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - damage);
		attackerObject.turn = true;
	}	
}

//Player's method: weak attack
//This method performs a weak attack on an enemy, which consumes half of the current maximum MP
//Damage is calculated as follow: Player's strength stat + Random(0-10)
//If  MP < maxMP/2, the method prints a dialog to indicate not enough MP, and keeps the player's turn

skillsLibrary["loAttack"] = {

	label: "Weak Attack", 
	mpRatio: 0.5,
	action : function(attackerObject, attackedObject){
		var damage = Math.max.apply(Math, [Math.floor((1+Math.random()*0.5)*attackerObject.str) - attackedObject.block*attackedObject.str, 0]);
		$battleDialog = $('<div></div>');
		
		
		if (attackerObject.type=="enemy"){
			$battleDialog.html("Snap! the "+ attackerObject.name + attackerObject.loAttDiag+" and makes "+damage+" damage!").addClass('red');
			console.log(attackerObject.name+" makes "+damage+ " damage!");
		}
		else{
			if (Math.floor(Math.random()*10)>7){
					damage = damage*2;
					$slayerDialog = $('<div></div>');
					$slayerDialog.html("Awesome, you got a critical hit! the enemy gets "+damage+" damage!").addClass('green');
					console.log(attackerObject.name+" makes "+damage+ " damage!");
				}
				else{
					$battleDialog.html(attackerObject.name + "attacks and makes "+damage+" damage!").addClass('green');
					console.log(attackerObject.name+" makes "+damage+ " damage!");
				}
			
		}
		
		$("#battleWindow").append($battleDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - damage);
		attackerObject.turn = true;
	}
}
	
skillsLibrary["hiAttack"] = {

	label: "Strong Attack",
	mpRatio: 0.75,
	action: function(attackerObject, attackedObject){
		var damage = Math.max.apply(Math, [Math.floor((2+Math.random()*0.5)*attackerObject.str) - attackedObject.block*attackedObject.str, 0]);
		$battleDialog = $('<div></div>');
		
		
		if (attackerObject.type=="enemy"){
			$battleDialog.html("Snap! the "+ attackerObject.name + attackerObject.hiAttDiag+" and makes "+damage+" damage!").addClass('red');
			console.log(attackerObject.name+" makes "+damage+ " damage!");
		}
		else{
			if (Math.floor(Math.random()*10)>9){
					damage = damage*2;
					$slayerDialog = $('<div></div>');
					$slayerDialog.html("Awesome, you got a critical hit! the enemy gets "+damage+" damage!").addClass('green');
					console.log(attackerObject.name+" makes "+damage+ " damage!");
				}
				else{
					$battleDialog.html("Woah!, the "+attackerObject.name + " dashes and attacks making "+damage+" damage!").addClass('green');
					console.log(attackerObject.name+" makes "+damage+ " damage!");
				}
			
		}
		
		
		$("#battleWindow").append($battleDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - damage);
		attackerObject.turn = true;
	}
}
    
skillsLibrary["heal"] = {

	label: "Heal",
	mpRatio: 0.5,
	action: function(attackerObject, attackedObject){
		var healhp= 0.5*attackerObject.maxHP + Math.floor(80*(attackerObject.int)/100);
        attackerObject.HP = Math.min.apply(Math,[attackerObject.maxHP,attackerObject.HP + healhp]);
        
        $battleDialog = $('<div></div>');
        $battleDialog.html(attackerObject.name+" recovered "+healhp+" HP!").addClass('blue');
        $("#battleWindow").append($battleDialog);
		attackerObject.turn = true;
	}
}

skillsLibrary["miasma"] = {
	
	label: "Miasma",
	mpRatio: 0.5,
	action : function(attackerObject, attackedObject){
		var damage = Math.max.apply(Math, [Math.floor(Math.random()*10 + attackerObject.int) - attackedObject.block*attackedObject.int, 0]);
		$battleDialog = $('<div></div>');
		
		
		if (attackerObject.type=="enemy"){
			$battleDialog.html("Snap! the "+ attackerObject.name+" casts miasma and makes "+damage+" damage!").addClass('red');
			console.log(attackerObject.name+" makes "+damage+ " damage!");
		}
		else{
			$battleDialog.html(attackerObject.name + " focuses his cosmos, casting Miasma! the attack makes "+damage+" damage!").addClass('green');
			console.log(attackerObject.name+" makes "+damage+ " damage!");
		}
		
		$("#battleWindow").append($battleDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - damage);
		attackerObject.turn = true;
	}	
}

skillsLibrary["guard"] = {
	
	label: "Guard",
	mpRatio: 0,
	action : function(attackerObject, attackedObject){
		attackerObject.turn = true;
	}	
}