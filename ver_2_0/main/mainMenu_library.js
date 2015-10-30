//Main Screen function
//Returns player to the Main Menu
function mainScreen(){

	$('.battleWindow').empty();
	$titleScreen = $('<div></div>');
	$titleScreen.html('RPG battle demo').attr('id', 'titleScreen');
	$(".battleWindow").append($titleScreen);	
	$('button').addClass('gameover');
	$('#statsWindowWrapper').addClass('gameover');
    $('#newGame').removeClass('gameover');
	$('#load').removeClass('gameover');
    $('.playerStats div').addClass('gameover');
    $('#enemyhp').addClass('gameover');
	$('#HPbar').addClass('gameover');
	$('#MPbar').addClass('gameover');
    $('#newGame').html('New Game');
	$('#load').html("Load Game");
	
};

//New Game function
//This function hides the new game and load buttons and 
//displays the 'Play' button
function newGame(){

	$('#newGame').addClass('gameover');
	$('#load').addClass('gameover');
	$('#play').removeClass('gameover');
	$('#play').html('Play');
	console.log("newGame was executed");
	
};

//Save function
//This function saves the current player object into the localstorage for HTML5
//It converts the player object into a JSON string, saves it into local storage
//and displays a Saved message on the save button.
function saveData(player){

	var newJSON = JSON.stringify(player);    
    localStorage.setItem("localsaveRPG", newJSON);
	$('#save').html("Saved!");
	
};

//Load function
//This function loads the saved player object into the game for continued progress
//It saves the JSON string into a variable, which is then parsed and assigned to the
//player object.
function loadData(){

	var lsave = localStorage.getItem("localsaveRPG");
    var playerTemp =JSON.parse(lsave);
	$('#load').html("Success!");
	$('#newGame').addClass('gameover');
	$('#play').removeClass('gameover');
	$('#play').html("Continue");
	return playerTemp;
	
};

//Select Dungeon function
//This function removes buttons from the UI, and leaves the dungeon buttons visible
//for selection.
function selectDungeon (){

	$('.battleWindow').empty();
	$('.battleWindow').html("Choose a dungeon!");	
	$('button').removeClass('gameover'); 
	$('#play').addClass('gameover');
	$('#load').addClass('gameover');
	$('#save').addClass('gameover');
	$('#heal').addClass('gameover');
	$('#newGame').addClass('gameover');
	$('.playerStats div').addClass('gameover');
    $('#enemyhp').addClass('gameover');	
	$('#HPbar').removeClass('gameover');
	$('#MPbar').removeClass('gameover');
	$('#loattack').addClass('gameover');
	$('#hiattack').addClass('gameover');
	$('#block').addClass('gameover');
	
};