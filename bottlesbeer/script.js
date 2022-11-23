
window.onload = function() { bottles(); };


function bottles()
{


	var one = " of beer on the wall, ";
	var two = " of beer";
	var three = "Take one down and pass it around, ";
	var threeFinal = "<br>Go to the store and buy some more, ";
	var four = " of beer on the wall";
	var bottles = "";
	var numBottles = 0;
	var outputString = "";


	for( numBottles=99; numBottles>=0; numBottles-- )  //Loop through numBottles - Descriptive variable name used for readability
	{
		bottles = getBottles( numBottles ); //getBottles() matches the correct string with the number of bottles  
		if( numBottles != 0 )               //For all but the last verse...
		{				 
			assembleLyrics( bottles, one, two, three, four, numBottles ); //Use the outputLyrics() method to output each verse	
		}
		else //For the last verse...
		{
			assembleLyrics( bottles, one, two, threeFinal, four, numBottles ); //Replace 'three' with 'threeFinal'
		}
	}
	document.getElementById("output").innerHTML = outputString;


	function getBottles( numBottles )
	{
		
		if( numBottles >= 2 )
		{
			return numBottles + " bottles";
		}
		else if( numBottles == 1 )
		{
			return numBottles + " bottle";
		}
		else if( numBottles == 0 )
		{
			return "no more bottles";	
		}
		else
		{
			return "99 bottles";	
		}
	}


	//Method that accepts fragments of the song as arguments and assembles them for outputting
	function assembleLyrics( bottles, one, two, three, four, numBottles )
	{
		if( numBottles != 0 ) //For all but the last verse...
		{
			outputString = outputString + bottles + one + bottles + two + "<br>"; //Output first line				
		}
		else //For the last verse...
		{
			outputString = outputString + bottles.substring(0, 1).toUpperCase() + bottles.substring(1) + one + bottles + two; //Capitalise letter and output first line	
		}
		bottles = getBottles( numBottles - 1 );                  			   //Reduce value of 'bottles' by 1 before outputting the second line 
		outputString = outputString + three + bottles + four + "<br><br>";     //Output the second line				
	}
}