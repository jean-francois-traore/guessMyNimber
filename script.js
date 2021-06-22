'use strict';

// Cette variable permet de generer 1 nombre entier aléatoirement entre 1 et 20
let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
function displatMessage(message) {
    document.querySelector('.message').textContent = message;
}
function displayBody(color) {
    document.querySelector('body').style.backgroundColor = color;
}
function displayNumber(number) {
    document.querySelector('.number').textContent = number;
}
function displayScore(score) {
    document.querySelector('.score').textContent = score;
}
function displayNumberStyle(style){
    document.querySelector('.number').style.width = style;
}
document.querySelector('.check').addEventListener('click', function(){
    const guess = Number(document.querySelector('.guess').value);
// Lorsque la valeur est vide de champs est vide
    if (!guess) {
        displatMessage('⛔ No number');
    }

    // losqu'il y a une victoir
    else if (guess === secretNumber) {
        displayNumber(secretNumber);
        displatMessage('👌 Number correct!');
        displayBody('#60b347')
        displayNumberStyle('30rem');
        if(score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }
    } 

    // Lorsque le nombre entrer est élévé ou faible
    else if(guess !== secretNumber){
        if(score > 1) {
            displatMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
            score--;
            displayScore(score);
        } else {
            displatMessage('💥 You lost the game!');
            displayScore(0);
        }
    }

});

document.querySelector('.again').addEventListener('click', function(){
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displatMessage('Start guessing...');
    displayScore(score);
    displayNumber('?');
    document.querySelector('.guess').value = '';
    displayBody('#222')
    displayNumberStyle("15rem");
})