function guessingGame() {
    const secretNum = Math.floor(Math.random() * 100);    
    let guessCount = 0;
    let gameOver = false;

    return function game(guess) {
        if(gameOver) return "The game is over, you already won!";
        guessCount++;
        if(guess > secretNum) {
            return `${guess} is too high!`;
        } else if(guess < secretNum) {
            return `${guess} is too low!`;
        } else {
            gameOver = true;
            return `You win! You found ${secretNum} in ${guessCount} guesses.`
        }
    }
}

module.exports = { guessingGame };
