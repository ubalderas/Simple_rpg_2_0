//Enemy constructor
//The enemy constructor is used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
function player_gen(player_obj, skillsLibrary) {
    this.name = player_obj.name;
	this.str = player_obj.str;
	this.agil= player_obj.agil;
	this.int = player_obj.int;
	
    this.maxHP=player_obj.maxHP;
	this.MP=player_obj.MP;
    this.HP=player_obj.HP;
	this.maxMP=player_obj.maxMP;	
	this.gold=player_obj.gold;
    this.block=player_obj.block;
	this.turn=false;
	
	this.skillnames = player_obj.skillnames;
	this.skills = new Object();
    
	this.init = function (){
				
		if(this.skillnames.length > 0){
			for(skill in this.skillnames)
				{
					var currentSkillName = this.skillnames[skill];
					this.skills[currentSkillName] = skillsLibrary[currentSkillName];
					
				}
		
		}
			
	}	
	
	//Player's method: weak attack
	//This method performs a weak attack on an enemy, which consumes half of the current maximum MP
	//Damage is calculated as follow: Player's strength stat + Random(0-10)
	//If  MP < maxMP/2, the method prints a dialog to indicate not enough MP, and keeps the player's turn
	
	this.loAttack = function(hit){
		if (this.MP >= this.maxMP/2){
			if (hit) {
				var slayerDamage = Math.floor(Math.random()*10 + this.str);
				
				if (Math.floor(Math.random()*10)>7){
					slayerDamage = slayerDamage*2;
					var critical = true;
				}
				
				$slayerDialog = $('<div></div>');
				if (critical){
					$slayerDialog.html("Awesome, you got a critical hit! the enemy gets "+slayerDamage+" damage!").addClass('green');
				}
				else{
					$slayerDialog.html("You attack the enemy and make "+slayerDamage+" damage!").addClass('green');
				}
				$(".battleWindow").append($slayerDialog);
				enemy.HP = Math.max(0,enemy.HP - slayerDamage);
			}
		
			else {
				$missedDialog = $('<div></div>');
				$missedDialog.html('The attack missed!').addClass('red');
				$(".battleWindow").append($missedDialog);
			}
		
			this.MP -= Math.floor(this.maxMP/2);
			this.block = 0;
			this.turn = true;
		}
		else{
			$noMPDialog = $('<div></div>');
			$noMPDialog.html("Not enough MP!").addClass('red');
			$(".battleWindow").append($noMPDialog);    
			this.turn = false;
		}
       
    };
	
	//Player's method: strong attack
	//This method performs a strong attack on an enemy, which consumes 2/3 of the current maximum MP
	//Damage is calculated as follow: 1.5*(Player's strength stat) + Random(0-10)
	//If  MP < maxMP*2/3, the method prints a dialog to indicate not enough MP, and keeps the player's turn
	
	this.hiAttack = function(hit){
		if (this.MP >= 2*this.maxMP/3){	
			if(hit){
				var slayerDamage = Math.floor(Math.random()*10 + 1.5*this.str);
				if (Math.floor(Math.random()*10)>9){
					slayerDamage = slayerDamage*2;
					var critical = true;
				}
				
				$slayerDialog = $('<div></div>');
				if (critical){
					$slayerDialog.html("Awesome, you got a critical hit! the enemy gets "+slayerDamage+" damage!").addClass('green');
				}
				else{
					$slayerDialog.html("You attack the enemy and make "+slayerDamage+" damage!").addClass('green');
				}
				$(".battleWindow").append($slayerDialog);
				enemy.HP = Math.max(0,enemy.HP - slayerDamage);
				
			}
			
			else {
				$missedDialog = $('<div></div>');
				$missedDialog.html('The attack missed!').addClass('red');
				$(".battleWindow").append($missedDialog);
			}
			
			this.MP -= Math.floor(2*this.maxMP/3);
			this.block = 0;
			this.turn = true;
			
		}
		else{
			$noMPDialog = $('<div></div>');
			$noMPDialog.html("Not enough MP!").addClass('red');
			$(".battleWindow").append($noMPDialog);    
			this.turn = false;
		}
       
    };
    
	//Player's method: Heal
	//This method performs a heal on the player, which consumes 8MP of the current MP
	//HP regenerated is calculated as follow: 80+(Player's strength stat)*80/100
	//If  MP < 8, the method prints a dialog to indicate not enough MP, and keeps the player's turn
	
	this.heal = function(){
		if (slayer.MP >= this.maxMP/5){
			var healhp= 0.5*this.maxHP + Math.floor(0.8*(this.int));
			slayer.HP = Math.min.apply(Math,[this.maxHP,slayer.HP + healhp]);
			slayer.MP -= this.maxMP/5;
			$healDialog = $('<div></div>');
			$healDialog.html("You recovered "+healhp+" HP!").addClass('blue');
			$(".battleWindow").append($healDialog);
			this.block = 0;
			this.turn = true;
			
		}
		else{
			$noMPDialog = $('<div></div>');
			$noMPDialog.html("Not enough MP!").addClass('red');
			$(".battleWindow").append($noMPDialog);    
			this.turn = false;
		}
	}
	
	
	//Player's method: block
	//This method performs blocking, which reduces damage current Player's strength multiplied by the blocking ratio.
	//So, Damage = Enemy Damage - (Player's Strength)*(block ratio)
	this.blocking = function (){
		this.block = 2;
		this.turn = true;
	};
		
	//Player's method: potion
	//This method performs the use of a potion item, which heals the player 50HP, and consumes no MP.
	
	
	//Player's method: mp_regen
	//This method is performed at the end of every turn, and recovers 1/4 of the maxMP
	this.mp_regen = function (){
		this.MP += Math.floor(this.maxMP/4);
		this.MP = Math.min.apply(Math,[this.maxMP, this.MP]);
	};
	
	//Player Battle start function
	//Initializes HP and MP values for the player at the beginning of battle.
    this.battleStart = function(){
        this.HP = this.maxHP;
		this.MP = this.maxMP;
		
    };
}