//Together we are doing it in Vanilla Jabascript
//Your homework - due next wednesday will be to do it
//In Jquery
//The Logic will ne the same

//start off with scores
var humanScore = 0;
var computerScore = 0;

//.on(click) -> PURE JS: .onclick()

//grab the element, set an event listener
document.getElementById('rock').onclick = playRock;
document.getElementById('paper').onclick = playPaper;
document.getElementById('scissors').onclick = playScissors;

//$('#rock').on('click', playRock)


function playRock(){
play("rock");
}

function playPaper(){
play("paper")
}
function playScissors(){
play("scissors")
}

//we have an parameter called humanplay that will 
//execute when the function play is run.
function play(humanPlay){
	//our logic for what we play
	//see what the computer plays
computerPlay = getComputerPlay();

document.getElementById('status').innerHTML = "<p>You played <strong>" + humanPlay + "</strong>. The bot played <strong>" + computerPlay + "</strong>.</p>";	//jquery - innerHTML - .html()

//if else statements - if else statements inside of statements
if(humanPlay == 'rock'){
	if(computerPlay == 'rock'){
		//display using .html() for jquery
		document.getElementById('status').innerHTML += "<p>You tied. :|</p>"
		//$('#status').html()
	} else if (computerPlay == 'paper'){
		console.log("you lose")
		document.getElementById('status').innerHTML = "<p>You lose. :(</p>"
		//add to the computers score
	} else if (computerPlay == 'scissors'){
		console.log('You Win')
		//add to our score
	}
} else if (humanPlay == 'paper'){
	if(computerPlay == 'rock'){
		console.log('you win')
		//add to our score
	} else if (computerPlay == 'paper'){
		console.log('you tied')
	} else if (computerPlay == 'scissors') {
		console.log('you lose')
		//add to the computer score
	}
} else if (humanPlay == 'scissors'){
	if(computerPlay == 'rock'){
		console.log('you lose')
		//add to the computer score
	}else if(computerPlay == 'paper'){
		console.log('you win')
		//add to your score
	} else if(computerPlay == 'scissors'){
		console.log("you tied")
	}
}

}

//grab the id where we display the score and add the human score
//grab the id where we display the score and add the computer score.

function getComputerPlay() {
	//first create the array that has index of 0, 1, 2
	var plays = ["rock", "paper", "scissors"];
	//
	var play = plays[Math.floor(Math.random() * plays.length)];
  return play;
}