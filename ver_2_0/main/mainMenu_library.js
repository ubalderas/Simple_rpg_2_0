//Main Screen function
//Returns player to the Main Menu
function mainScreen(){

	$('#battleWindow').empty();
	$titleScreen = $('<div></div>');
	$titleScreen.html('RPG battle demo').attr('id', 'titleScreen');
	$("#battleWindow").append($titleScreen);	
	$('button').addClass('element-hide');
	$('#HUD-statsWindowWrapper').addClass('element-hide');
    $('#titleScreenMenu-button-newGame').removeClass('element-hide');
	$('#titleScreenMenu-button-loadGame').removeClass('element-hide');
    $('#HUD-playerStats div').addClass('element-hide');
    $('#HUD-enemyhp').addClass('element-hide');
	$('#HUD-HPbar').addClass('element-hide');
	$('#HUD-MPbar').addClass('element-hide');
    $('#titleScreenMenu-button-newGame').html('New Game');
	$('#titleScreenMenu-button-loadGame').html("Load Game");
	
};

//New Game function
//This function hides the new game and load game buttons and 
//displays the 'Play' button
function newGame(){

	$('#titleScreenMenu-button-newGame').addClass('element-hide');
	$('#titleScreenMenu-button-loadGame').addClass('element-hide');
	$('#titleScreenMenu-button-play').removeClass('element-hide');
	$('#titleScreenMenu-button-play').html('Play');
	
};

//Save function
//This function saves the current player object into the localstorage for HTML5
//It converts the player object into a JSON string, saves it into local storage
//and displays a Saved message on the save button.
function saveData(player){

	var newJSON = JSON.stringify(player);    
    localStorage.setItem("localsaveRPG", newJSON);
	$('#endOfBattleMenu-button-save').html("Saved!");
	
};

//Load function
//This function loads the saved player object into the game for continued progress
//It saves the JSON string into a variable, which is then parsed and assigned to the
//player object.
function loadData(){

	var lsave = localStorage.getItem("localsaveRPG");
    var playerTemp =JSON.parse(lsave);
	$('#battleWindow').empty();
	$('#battleWindow').html('Game loaded successfully!');
	$('#titleScreenMenu-button-loadGame').addClass('element-hide');
	$('#titleScreenMenu-button-newGame').addClass('element-hide');
	$('#titleScreenMenu-button-play').removeClass('element-hide');
	$('#titleScreenMenu-button-play').html("Continue");
	return playerTemp;
	
};

//Select Dungeon function
//This function removes buttons from the UI, and leaves the dungeon buttons visible
//for selection.
function selectDungeon (){

	$('#battleWindow').empty();
	$('#battleWindow').html("Choose a dungeon!");	
	$('button').removeClass('element-hide'); 
	$('#titleScreenMenu-button-play').addClass('element-hide');
	$('#titleScreenMenu-button-loadGame').addClass('element-hide');
	$('#endOfBattleMenu-button-save').addClass('element-hide');
	
	$('#titleScreenMenu-button-newGame').addClass('element-hide');
	$('#HUD-playerStats div').addClass('element-hide');
    $('#HUD-enemyhp').addClass('element-hide');	
	$('#HUD-HPbar').removeClass('element-hide');
	$('#HUD-MPbar').removeClass('element-hide');
	
	
	
	
};