//Enemy constructor
//The enemy constructor is used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
function enemy_gen(enemy_obj, skillsLibrary) {
	this.type = enemy_obj.type;
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
	this.expAGI=enemy_obj.expAGI;
	this.block=enemy_obj.block;
	this.loAttDiag = enemy_obj.loAttDiag;
	this.hiAttDiag = enemy_obj.hiAttDiag;
	this.skillnames = enemy_obj.skillnames;
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
    
    this.init();
	
	this.Action = function (enemyObject, playerObject){
		var skillIndex = Math.floor(Math.random()*this.skillnames.length);
		var skillName = this.skillnames[skillIndex];
		console.log(skillName);
		this.skills[skillName].action(enemyObject, playerObject);
	}
	
	
	
    this.battleStart = function(){
        this.HP = this.maxHP;
		this.MP = this.maxMP;
		$enemyDialog = $('<div></div>');
        $enemyDialog.html("An enemy "+this.name+" approaches!").addClass('blue');
        $("#battleWindow").append($enemyDialog);
    };
}