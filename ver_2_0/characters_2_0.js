//Initialize Player object

var slayer = {
    str:40,	//Determines physical attacks damage
    int:5,	//Determines Magic/non-physical attacks damage
	agil:5,		//Determines if a an attack lands or misses
    potions:5,	//Number of current health replenishing potions
    maxHP:100,	//Current maximum hit points
    HP:0,	//Initializes and holds current hit points
    maxMP:20,	//Current maximum Magic/abilities points
    MP:0,	//Initializes and holds current m points
    Gold:0,	//Initializes and holds current gold
	block:0,	//holds current blocking ratio
	turn:false	//holds a flag to determine player's turn
};


//Player's method: weak attack
//This method performs a weak attack on an enemy, which consumes half of the current maximum MP
//Damage is calculated as follow: Player's strength stat + Random(0-10)
//If  MP < maxMP/2, the method prints a dialog to indicate not enough MP, and keeps the player's turn

slayer.loAttack = function (hit){

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
			enemy.HP -= slayerDamage;
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

slayer.hiAttack = function (){
	if (this.MP >= 2*this.maxMP/3){	
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
		enemy.HP -= slayerDamage;
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

slayer.heal = function (){
    if (slayer.MP >= 8){
        var healhp= 0.5*this.maxHP + Math.floor(0.8*(this.int));
        slayer.HP = Math.min.apply(Math,[this.maxHP,slayer.HP + healhp]);
        slayer.MP -= 8;
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
};

//Player's method: block
//This method performs blocking, which reduces damage current Player's strength multiplied by the blocking ratio.
//So, Damage = Enemy Damage - (Player's Strength)*(block ratio)

slayer.blocking = function (){
	this.block = 2;
	this.turn = true;
};

//Player's method: potion
//This method performs the use of a potion item, which heals the player 50HP, and consumes no MP.

slayer.potion = function (){
    if (slayer.potions>0){
        slayer.HP = Math.min.apply(Math,[this.maxHP,slayer.HP + 50]);
        slayer.potions -= 1;
        $healDialog = $('<div></div>');
        $healDialog.html("You recovered 50 HP!").addClass('blue');
        $(".battleWindow").append($healDialog);
		this.block = 0;
		this.turn = true;
        
    }
    else{
        $alertDialog = $('<div></div>');
        $alertDialog.html("You have no more potions!").addClass('red');
        $(".battleWindow").append($alertDialog);
    	this.turn = false;
    }
};

//Player's method: mp_regen
//This method is performed at the end of every turn, and recovers 1/4 of the maxMP
slayer.mp_regen = function (){
	this.MP += Math.floor(this.maxMP/4);
	this.MP = Math.min.apply(Math,[this.maxMP, this.MP]);
};

//Player's method: mp_regen
//This method is performed at the beginning of a battle, and it resets HP and MP to max values, along with providing 5 potions.
slayer.battleStart = function(){
    this.HP=this.maxHP;
    this.MP=this.maxMP;
    this.potions = 5;
};

