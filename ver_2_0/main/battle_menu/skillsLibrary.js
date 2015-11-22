skillsLibrary = new Object();

skillsLibrary["flame"] = {
	
	
	action : function(attackerObject, attackedObject){
		var enemyDamage = Math.max.apply(Math, [Math.floor(Math.random()*10 + attackerObject.int) - attackedObject.block*attackedObject.int, 0]);
		$enemyDialog = $('<div></div>');
		$enemyDialog.html("Snap! the "+ attackerObject.name+" spits a flame to you and makes "+enemyDamage+" damage!").addClass('red');
		$("#battleWindow").append($enemyDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - enemyDamage);
		
	}	
}

skillsLibrary["loAttack"] = {

	action : function(attackerObject, attackedObject){
		var enemyDamage = Math.max.apply(Math, [Math.floor(Math.random()*10 + attackerObject.str) - attackedObject.block*attackedObject.str, 0]);
		$enemyDialog = $('<div></div>');
		$enemyDialog.html("Snap! the "+ attackerObject.name + attackerObject.loAttDiag+" and makes "+enemyDamage+" damage!").addClass('red');
		$("#battleWindow").append($enemyDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - enemyDamage);
	}
}
	
skillsLibrary["hiAttack"] = {

	action: function(attackerObject, attackedObject){
		var enemyDamage = Math.max.apply(Math, [Math.floor(Math.random()*10 + 1.5*attackerObject.str) - attackedObject.block*attackedObject.str, 0]);
		$enemyDialog = $('<div></div>');
		$enemyDialog.html("Snap! the "+ attackerObject.name + attackerObject.hiAttDiag+" and makes "+enemyDamage+" damage!").addClass('red');
		$("#battleWindow").append($enemyDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - enemyDamage);
	}
}
    
skillsLibrary["heal"] = {

	action: function(attackerObject, attackedObject){
		var healhp= 0.5*attackerObject.maxHP + Math.floor(80*(attackerObject.int)/100);
        attackerObject.HP += healhp;
        
        $enemyhealDialog = $('<div></div>');
        $enemyhealDialog.html(attackerObject.name+" recovered "+healhp+" HP!").addClass('blue');
        $("#battleWindow").append($enemyhealDialog);
	}
}

skillsLibrary["miasma"] = {
	
	
	action : function(attackerObject, attackedObject){
		var enemyDamage = Math.max.apply(Math, [Math.floor(Math.random()*10 + attackerObject.int) - attackedObject.block*attackedObject.int, 0]);
		$enemyDialog = $('<div></div>');
		$enemyDialog.html("Snap! the "+ attackerObject.name+" casts miasma and makes "+enemyDamage+" damage!").addClass('red');
		$("#battleWindow").append($enemyDialog);
		attackedObject.HP = Math.max(0,attackedObject.HP - enemyDamage);
		
	}	
}