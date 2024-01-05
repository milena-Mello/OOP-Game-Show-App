let game = '';
const btnReset = document.querySelector('#btn__reset');
const keys = document.querySelectorAll('.keyrow button');

// Start game when start button is clicked
btnReset.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

// Handle onscreen keyboard button clicks
keys.forEach(key => {
    key.addEventListener('click', () => {
        game.handleInteraction(key);
    });
});

// physical computer keyboard to enter guesses (extra credit)
document.addEventListener('keydown', (event) => {
    const keys = document.querySelectorAll('#qwerty .key');
    keys.forEach(key => {
        if (key.textContent === event.key && key.disabled === false) {
            game.handleInteraction(key);
        }
    });
});






