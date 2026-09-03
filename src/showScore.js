function decideAdvantage(player1Score, player2Score) {
    let advantage = '';
    if(player1Score > player2Score) {
        advantage = 'Advantage Player 1';
    } else {
        advantage = 'Advantage Player 2';
    }
    return advantage;
}

function winner(player1Score, player2Score) {
    let winner = '';
    if(player1Score > player2Score) {
        winner = 'Game for Player 1';
    } else {
        winner = 'Game for Player 2';
    }
    return winner;
}

function calculateScore(player1Score, player2Score) {
    const scores = ['Love', '15', '30', '40'];
    let score = '';

    if(Math.abs(player1Score - player2Score) >= 2 && (player1Score >= 4 || player2Score >= 4)) {
        score = winner(player1Score, player2Score);
    } else if (player1Score === player2Score && player1Score >= 3) {
        score = 'Deuce';
    } else if(player1Score >= 4 || player2Score >= 4) {
        score = decideAdvantage(player1Score, player2Score);
    }
    else {
        score = `${scores[player1Score]} - ${scores[player2Score]}`;
    }

    return score;
}

export default calculateScore;