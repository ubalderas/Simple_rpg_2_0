//Enemy constructor
//The enemy constructor is used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
function enemy_gen(enemy_obj) {
    this.name = enemy_obj.name;
	this.str = enemy_obj.str;
	this.agil= enemy_obj.agil;
	this.int = enemy_obj.int;
    this.maxHP=enemy_obj.maxHP;
	this.MP=enemy_obj.MP;
    this.HP=enemy_obj.HP;
	this.expHP=enemy_obj.expHP;
	this.expstr=enemy_obj.expstr;
	this.expgold=enemy_obj.expgold;
    this.expint=enemy_obj.expint;
    this.expMP=enemy_obj.expMP;
	this.loAttDiag = enemy_obj.loAttDiag;
	this.hiAttDiag = enemy_obj.hiAttDiag;
	
	
	this.loAttack = function(){
		var enemyDamage = Math.max.apply(Math, [Math.floor(Math.random()*10 + this.str) - slayer.block*slayer.str, 0]);
		$enemyDialog = $('<div></div>');
		$enemyDialog.html("Snap! the "+ this.name + this.loAttDiag+" and makes "+enemyDamage+" damage!").addClass('red');
		$(".battleWindow").append($enemyDialog);
		slayer.HP = Math.max(0,slayer.HP - enemyDamage);
       
    };
	
	this.hiAttack = function(){
		var enemyDamage = Math.max.apply(Math, [Math.floor(Math.random()*10 + 1.5*this.str) - slayer.block*slayer.str, 0]);
		$enemyDialog = $('<div></div>');
		$enemyDialog.html("Snap! the "+ this.name + this.hiAttDiag+" and makes "+enemyDamage+" damage!").addClass('red');
		$(".battleWindow").append($enemyDialog);
		slayer.HP = Math.max(0,slayer.HP - enemyDamage);
       
    };
    
	this.Heal = function(){
		var healhp= 0.5*this.maxHP + Math.floor(80*(this.int)/100);
        this.HP += healhp;
        
        $enemyhealDialog = $('<div></div>');
        $enemyhealDialog.html(this.name+" recovered "+healhp+" HP!").addClass('blue');
        $(".battleWindow").append($enemyhealDialog);
	}
	
	this.Action = function (){
		if (this.HP < this.maxHP/3 && Math.floor(Math.random()*10)>5){
		
			this.Heal();
		}
		else{
			if (Math.floor(Math.random()*10)>5){
				this.loAttack();
			}
			else {
				this.hiAttack();
			}
		}
	}
	
    this.battleStart = function(){
        this.HP = this.maxHP;
		this.MP = this.maxMP;
		$enemyDialog = $('<div></div>');
        $enemyDialog.html("An enemy "+this.name+" approaches!").addClass('blue');
        $(".battleWindow").append($enemyDialog);
    };
}