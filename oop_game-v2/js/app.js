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




