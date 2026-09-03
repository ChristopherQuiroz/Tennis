function calculateScore(player1Score, player2Score) {
    const scores = ['Love', '15', '30', '40'];
    let score = '';

    if (player1Score === player2Score && player1Score >= 3) {
        score = 'Deuce';
    } else if(player1Score >= 4 && player1Score > player2Score) {
        score = 'Advantage Player 1';
    }
    else {
        score = `${scores[player1Score]} - ${scores[player2Score]}`;
    }

    return score;
}

export default calculateScore;