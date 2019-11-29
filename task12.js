

Game();

function Game(){
var randomNumber = Math.random();
var range = (randomNumber * 100) + 1;
var number = Math.floor(range);
var i = 1;
do{
    i++;
  
    var choice = prompt('Guess the number from 1 to 100: ');
   
    if(number == choice){
        alert('You are right, you won!');
        PlayAgain();
        break;
    }
    else{
        alert('Incorrect, please try again!');
    }
}
while (i <= 3);

lose();

}

function PlayAgain(){
    var playAgain = prompt('do you want to play again? YES or NO ');
    if (playAgain === 'yes'){
        Game();
    }
    else{
        if(playAgain === 'no'){
            alert('Thank you for playing!');
        }
    }
}

function lose(){
    alert('you lose!');
    PlayAgain();
}