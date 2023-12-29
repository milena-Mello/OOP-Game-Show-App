
let game = '';
const btnReset = document.querySelector('#btn__reset');
btnReset.addEventListener('click', () => {
    game = new Game();
    game.startGame();
});

