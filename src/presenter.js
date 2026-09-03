import showScore from './showScore.js';

const player1ScoreButton = document.getElementById('player1-Score');
const player2ScoreButton = document.getElementById('player2-Score');
const resultadoDiv = document.getElementById('resultado-div');

addEventListeners();

function addEventListeners() {
    let player1Score = 0;
    let player2Score = 0;

    player1ScoreButton.addEventListener('click', () => {
        player1Score++;
        updateScoreDisplay(player1Score, player2Score);
    });

    player2ScoreButton.addEventListener('click', () => {
        player2Score++;
        updateScoreDisplay(player1Score, player2Score);
    });

    updateScoreDisplay(player1Score, player2Score);
}

function updateScoreDisplay(player1Score, player2Score) {
    const score = showScore(player1Score, player2Score);
    resultadoDiv.innerHTML = score;

    if(score.startsWith('Game for Player')) {
        player1ScoreButton.disabled = true;
        player2ScoreButton.disabled = true;
    }
}