skillsLibrary = new Object();

skillsLibrary["flame"] = {
	
	label: "Flame",
	mpRatio: 0.5,
	action : function(attackerObject, attackedObject){
		var damage = Math.max.apply(Math, [Math.floor(Math.random()*10 + attackerObject.int) - attackedObject.block*attackedObject.int, 0]);
		
		$battleDialog = $('<div></div>');
		
		if (attackerObject.type=="enemy"){
			$battleDialog.html("Snap! the "+ attackerObject.name+" spits a flame to you and makes "+damage+" damage!").addClass('red');
		}
		else{
			$battleDialog.html("Boom! "+ attackerObject.name+" invokes a flame and makes "+damage+" damage!").addClass('green');
		}
		
		$("#battleWindow").append($battleDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - damage);
		attackerObject.turn = true;
	}	
}

skillsLibrary["loAttack"] = {

	label: "Weak Attack", 
	mpRatio: 0.5,
	action : function(attackerObject, attackedObject){
		var damage = Math.max.apply(Math, [Math.floor(Math.random()*10 + attackerObject.str) - attackedObject.block*attackedObject.str, 0]);
		$battleDialog = $('<div></div>');
		
		
		if (attackerObject.type=="enemy"){
			$battleDialog.html("Snap! the "+ attackerObject.name + attackerObject.loAttDiag+" and makes "+damage+" damage!").addClass('red');
		}
		else{
			$battleDialog.html(attackerObject.name + "attacks and makes "+damage+" damage!").addClass('green');
		}
		
		$("#battleWindow").append($battleDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - damage);
		attackerObject.turn = true;
	}
}
	
skillsLibrary["hiAttack"] = {

	label: "Strong Attack",
	mpRatio: 0.5,
	action: function(attackerObject, attackedObject){
		var damage = Math.max.apply(Math, [Math.floor(Math.random()*10 + 1.5*attackerObject.str) - attackedObject.block*attackedObject.str, 0]);
		$battleDialog = $('<div></div>');
		
		
		if (attackerObject.type=="enemy"){
			$battleDialog.html("Snap! the "+ attackerObject.name + attackerObject.hiAttDiag+" and makes "+damage+" damage!").addClass('red');
		}
		else{
			$battleDialog.html("Woah!, the "+attackerObject.name + " dashes and attacks making "+damage+" damage!").addClass('green');
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
        attackerObject.HP += healhp;
        
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
		}
		else{
			$battleDialog.html(attackerObject.name + " focuses his cosmos, casting Miasma! the attack makes "+damage+" damage!").addClass('green');
		}
		
		$("#battleWindow").append($battleDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - damage);
		attackerObject.turn = true;
	}	
}