function calculateScore(player1Score, player2Score) {
    const scores = ['Love', '15', '30', '40'];
    let score = '';

    if (player1Score === player2Score && player1Score >= 3) {
        score = 'Deuce';
    } else {
        score = `${scores[player1Score]} - ${scores[player2Score]}`;
    }

    return score;
}

export default calculateScore;