
// a game with 4 crystal and Random Result
// Every crystal needs to have a random number between 1 - 12
// When clicking any CRYSTAL, it should adding with the previous result
// Until it equals the Random Result
// If it is greater than the Random Result, we decrement a lost counter
// If it is equal, then we increment a win counter
// A new random number should be generate every single time we win or lost
// to those 4 crystals

$( document ).ready(function(){

// Setting up random numbers for each jewel between 1-12// 
	var Random=Math.floor(Math.random()*101+19)
	
// Appending random number to the randomNumber id in the html //
	$('#randomNumber').text(Random);
	var num1= Math.floor(Math.random()*11+1)
	var num2= Math.floor(Math.random()*11+1)
	var num3= Math.floor(Math.random()*11+1)
	var num4= Math.floor(Math.random()*11+1)

//  Decaring variables //	
	var userTotal= 0; 
	var wins= 0;
	var losses = 0;

 //resets the game
  $('#numberWins').text(wins);
  $('#numberLosses').text(losses);
 
  
  function reset(){
		Random=Math.floor(Math.random()*101+19);
		console.log(Random)
		$('#randomNumber').text(Random);
		num1= Math.floor(Math.random()*11+1);
		num2= Math.floor(Math.random()*11+1);
		num3= Math.floor(Math.random()*11+1);
		num4= Math.floor(Math.random()*11+1);
		userTotal= 0;
		$('#finalTotal').text(userTotal);
		} 

  //adds the wins to the userTotal
  function yay(){
  alert("YOU WIN!!!");
	wins++; 
	$('#numberWins').text(wins);
	reset();
  }

  //adds the losses to the userTotal
  function loser(){
  alert ("YOU LOST!!!");
	losses++;
	$('#numberLosses').text(losses);
	reset()
  }

  //sets up onClick function for jewels
	$('#one').on ('click', function(){
	  userTotal = userTotal + num1;
	  console.log("New userTotal= " + userTotal);
	  $('#finalTotal').text(userTotal); 

//sets win/lose conditions
		  if (userTotal == Random){
			yay();
		  }
		  else if ( userTotal > Random){
			loser();
		  }   
	})  
	$('#two').on ('click', function(){
	  userTotal = userTotal + num2;
	  console.log("New userTotal= " + userTotal);
	  $('#finalTotal').text(userTotal); 
		  if (userTotal == Random){
			yay();
		  }
		  else if ( userTotal > Random){
			loser();
		  } 
	})  

	$('#three').on ('click', function(){
	  userTotal = userTotal + num3;
	  console.log("New userTotal= " + userTotal);
	  $('#finalTotal').text(userTotal);

  //sets win/lose conditions
			if (userTotal === Random){
			yay();
		  }
		  else if ( userTotal > Random){
			loser();
		  } 
	})  
	$('#four').on ('click', function(){
	  userTotal = userTotal + num4;
	  console.log("New userTotal= " + userTotal);
	  $('#finalTotal').text(userTotal); 
		
			if (userTotal == Random){
			yay();
		  }
		  else if ( userTotal > Random){
			loser();
		  }
	});   
  }); 