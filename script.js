'use strict';
/*
document.querySelector('.message').textContent;
document.querySelector('.message').textContent = '🎉Correct Number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 7;
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
    displayMessage('Start guessing...');
    displayScore(score);
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);

    // When there is no input
    if (!guess) {
        displayMessage('⛔ No number!');

    // When player wins
    } else if (guess === secretNumber && score > 0) {
        displayMessage('🎉 Correct Number!');
        document.querySelector('body').style.backgroundColor = '#60b347';
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.number').textContent = secretNumber;
        displayScore(score);
        if (score > highscore) {
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
    }

    // When guess is Wrong
    else if (guess !== secretNumber) {
        if (score > 1){
        displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
        score--;
        displayScore(score);
        } else {
            displayMessage('💥 You lost the game!');
            score = 0;
            displayScore(score);
            document.querySelector('body').style.backgroundColor = '#f00034'; 
        }
    }
});

function displayMessage(message) {
    document.querySelector('.message').textContent = message;
}

function displayScore(score) {
    document.querySelector('.score').textContent = score;
}
