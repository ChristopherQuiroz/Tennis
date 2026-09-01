function calculateScore(player1Score, player2Score) {
    let score = "";
    if(player1Score === 0 && player2Score === 0) {
        score = "Love - Love";
    } else if(player1Score === 1 && player2Score === 0) {
        score = "15 - Love";
    }
    return score;
}

export default calculateScore;