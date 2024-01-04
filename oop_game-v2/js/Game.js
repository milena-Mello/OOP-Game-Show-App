class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

    // phrases object:
    createPhrases() {
        const phrases = [
            {
                phrase: 'Life is like a box of chocolates'
            },
            {
                phrase: 'There is no trying'
            },
            {
                phrase: 'May the force be with you'
            },
            {
                phrase: 'You have to see the matrix for yourself'
            },
            {
                phrase: 'You talking to me'
            }
        ];
        return phrases;
    }

    getRandomPhrase() {
        const randomPhrase = Math.floor(Math.random() * this.phrases.length);
        return this.phrases[randomPhrase];
    }

    /**
    * Begins game by selecting a random phrase and displaying it to user
    */
    startGame() {
        this.missed = 0;
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        const phraseUl = document.querySelector('#phrase ul');
        phraseUl.innerHTML = '';
        const keys = document.querySelectorAll('.keyrow button');
        keys.forEach(key => {
            key.disabled = false;
            key.classList.remove('chosen', 'wrong');
            key.classList.add('key');
        });
        const hearts = document.querySelectorAll('.tries img');
        hearts.forEach(heart => {
            heart.src = 'images/liveHeart.png';
        });
        this.activePhrase = new Phrase(this.getRandomPhrase().phrase); // this.activePhrase = new Phrase('You talking to me');
        this.activePhrase.addPhraseToDisplay();
    };

    /**
    * Checks for winning move
    * return {boolean} True if game has been won, false if game wasn't
    won
    */
    checkForWin() {
        const hiddenLetters = document.querySelectorAll('.hide');
        if (hiddenLetters.length === 0) {
            return true;
        } else {
            return false;
        }
    }

    /**
    * Increases the value of the missed property
    * Removes a life from the scoreboard
    * Checks if player has remaining lives and ends game if player is out
    */
    removeLife() {
        console.log(this.missed);
        const lives = document.querySelectorAll('.tries img');
        lives[this.missed].src = 'images/lostHeart.png';
        this.missed += 1;
        if (this.missed === 5) {
            this.gameOver(false);
        }
    }

    /**
    * Displays game over message
    * param {boolean} gameWon - Whether or not the user won the game
    */
    gameOver(gameWon) {
        const overlay = document.querySelector('#overlay');
        const gameOverMessage = document.querySelector('#game-over-message');
        overlay.style.display = 'block';
        if (gameWon) {
            gameOverMessage.textContent = 'You won!';
            overlay.className = 'win';
        } else {
            gameOverMessage.textContent = 'You lost!';
            overlay.className = 'lose';
        }
    }

    /**
    * Handles onscreen keyboard button clicks
    * param (HTMLButtonElement) button - The clicked button element
    */
    handleInteraction(button) {
        button.disabled = true;
        if (this.activePhrase.checkLetter(button.textContent)) {
            button.className = 'chosen';
            this.activePhrase.showMatchedLetter(button.textContent);
            if (this.checkForWin()) {
                this.gameOver(true);
            }
        } else {
            button.className = 'wrong';
            this.removeLife();
        }
    }

}
