//Enemy constructor
//The enemy constructor is used to generate an enemy object when initiating a battle.
//Enemy objects are very similar to the player's object, and follow a similar structure for its methods and properties
function player_gen(player_obj, skillsLibrary) {
	this.type = player_obj.type;
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
    
	this.initializeSkills = function (){
				
		if(this.skillnames.length > 0){
			for(skill in this.skillnames)
				{
					var currentSkillName = this.skillnames[skill];
					this.skills[currentSkillName] = skillsLibrary[currentSkillName];
					$skillButton=$('<button></button>');
					skillIdString='battleMenu-button-skill-'+this.skillnames[skill]
					$skillButton.attr('id',skillIdString)
					$skillButton.attr('name',this.skillnames[skill])
					$skillButton.html(this.skills[currentSkillName].label)
					$skillButton.addClass('skill-button');
					$("#buttonWrapper").append($skillButton);
				}
				
			$("button[id*='battleMenu-button-skill']").click(function(){
				$('#battleWindow').empty();
				skillName =	$(this).attr('name');
				console.log(slayer.name+" uses "+skillName);
				
				slayer.skillAction(slayer,enemy, skillName);
				statsPrint();
				
				console.log(enemy.name+" has "+enemy.HP+" HP");
				console.log(slayer.name);
				

			});			
		}
			
	}	
	
	this.skillAction = function (attackerObject, attackedObject, skillName){
		if (this.MP >= this.maxMP*this.skills[skillName].mpRatio){
			console.log(skillName);
			this.skills[skillName].action(attackerObject, attackedObject);
			this.MP -= this.maxMP*this.skills[skillName].mpRatio;
			
			if (skillName=="guard"){
				this.block = 2;
			}
			else{
				this.block = 0.5;
			}
			this.turn = true;
			
			if(enemy.HP <= 0){
				win();
				defeat();
			}
			else{
				enemyTurn(enemy, slayer);
			}
		}
		
		else{
			$noMPDialog = $('<div></div>');
			$noMPDialog.html("Not enough MP!").addClass('red');
			$("#battleWindow").append($noMPDialog);    
			this.turn = false;
		}
	}		
		
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