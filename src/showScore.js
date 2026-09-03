function calculateScore(player1Score, player2Score) {
    const scores = ['Love', '15', '30', '40'];
    let score = '';

    score = `${scores[player1Score]} - ${scores[player2Score]}`;

    return score;
}

export default calculateScore;