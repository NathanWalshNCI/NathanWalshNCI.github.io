/*
Alter the Rock Paper Scissors application to run 5 times, so that the following occurs:
Store the user guesses and return them to the user when they finish or win.
 */

var choicesArray = [];


function myCounter() 
{
    if( typeof counter == 'undefined' ) { counter = 0; }
    counter++;
    return counter;    
}


function rockPaperScissors(event) 
{                                  
	let playerChoice = event.target.name;
	let computerChoice = getComputerChoice();
	let result = getResult( playerChoice, computerChoice );
	counter = myCounter();
	if ( counter < 5 )
	{
		choicesArray.push( playerChoice );
		alert( "You Chose " + playerChoice + "\nThe Computer Chose " + computerChoice + "\nAttempt " + counter + " Result Is: You " + result + "!" );
		if( result == "Win" && counter == 1 ) 
		{ 
			document.getElementById('game_details').innerHTML = "<h2>CONGRATULATIONS ON YOUR WIN!</h2><br><h2>YOUR CHOICE WAS: " + choicesArray.toString(); 
		}
		if( result == "Win" && counter > 1 ) 
		{ 
			document.getElementById('game_details').innerHTML = "<h2>CONGRATULATIONS ON YOUR WIN!</h2><br><h2>YOUR CHOICES WERE: " + choicesArray.toString(); 
		}		
	}
	if ( counter == 5 )
	{
		choicesArray.push( playerChoice );
		alert( "You Chose " + playerChoice + "\nThe Computer Chose " + computerChoice + "\nAttempt " + counter + " Result Is: You " + result + "!" );
		if( result == "Win" ) 
		{ 
			document.getElementById('game_details').innerHTML = "<h2>CONGRATULATIONS ON YOUR WIN!</h2><br><h2>YOUR CHOICES WERE: " + choicesArray.toString(); 
		}
		else{ document.getElementById('game_details').innerHTML = "<h2>GAME OVER!</h2><br><h2>YOUR CHOICES WERE: " + choicesArray.toString(); }
					
	}	
}


function getComputerChoice()
{
	const values = ["Rock", "Paper", "Scissors"];
	const random = Math.floor(Math.random() * values.length);
	return values[random];	
}

function getResult( playerChoice, computerChoice )
{
	var result;
	if (playerChoice == "Rock")
	{
		if (computerChoice == "Paper")
		{
			result = "Lose";
		}
		else if (computerChoice == "Scissors" )
		{
			result = "Win";
		}
		else 
		{
			result = "Draw";
		} 
	}
	else if (playerChoice == "Paper")
	{
		if (computerChoice == "Rock")
		{
			result = "Win";
		}
		else if (computerChoice == "Scissors" )
		{
			result = "Lose";
		}
		else 
		{
			result = "Draw";
		}
	}
	else 
	{
		if (computerChoice == "Rock")
		{
			result = "Lose";
		}
		else if (computerChoice == "Paper" )
		{
			result = "Win";
		}
		else 
		{
			result = "Draw";
		}
	}
	return result;	
}


alert( "Welcome to Rock Paper Scissors! You Have Five Attempts to Win!");
document.getElementById("buttons").addEventListener('click', rockPaperScissors);