/*
Take the previously created Rock Paper Scissors application and allow the user to play 3 times
Bonus: The game should stop if the user wins
Bonus: The computer should change their guess each time
 */



alert( "Welcome to Rock Paper Scissors! You Have Three Attempts to Win!");
document.getElementById("buttons").addEventListener('click', rockPaperScissors);

function myCounter() 
{
    if( typeof counter == 'undefined' ) { counter = 0; }
    counter++;
    return counter;    
}



function rockPaperScissors(event) 
{                                  
	const playerChoice = event.target.name;
	const computerChoice = getComputerChoice();
	var result = getResult( playerChoice, computerChoice );
	counter = myCounter();
	if ( counter < 3 )
	{
			alert( "You Chose " + playerChoice + "\nThe Computer Chose " + computerChoice + "\nAttempt " + counter + " Result Is: You " + result + "!" );
			if( result == "Win" ) { document.getElementById('game_details').innerHTML = "<h2>CONGRATULATIONS ON YOUR WIN!</h2>"; }		
	}
	if ( counter == 3 )
	{
			alert( "You Chose " + playerChoice + "\nThe Computer Chose " + computerChoice + "\nAttempt " + counter + " Result Is: You " + result + "!" );
			if( result == "Win" ) { document.getElementById('game_details').innerHTML = "<h2>CONGRATULATIONS ON YOUR WIN!</h2>"; }
			else{ document.getElementById('game_details').innerHTML = "<h2>GAME OVER!</h2>"; }
					
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