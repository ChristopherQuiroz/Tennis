function decideAdvantage(player1Score, player2Score) {
    let advantage = '';
    if(player1Score > player2Score) {
        advantage = 'Advantage Player 1';
    } else {
        advantage = 'Advantage Player 2';
    }
    return advantage;
}

function calculateScore(player1Score, player2Score) {
    const scores = ['Love', '15', '30', '40'];
    let score = '';

    if(player1Score >= 4 && player1Score - player2Score == 2) {
        score = 'Game for Player 1';
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