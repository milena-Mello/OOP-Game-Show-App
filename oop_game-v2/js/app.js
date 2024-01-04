const game = new Game();
const btnReset = document.querySelector('#btn__reset');

let firstGame = true;
btnReset.addEventListener('click', () => {
    game.startGame();

    if (firstGame) {
        document.querySelectorAll('#qwerty .key').forEach(elem => {
            elem.addEventListener('click', (event) => {
                game.handleInteraction(event.target);
            })
        });
        firstGame = false;
    }
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






