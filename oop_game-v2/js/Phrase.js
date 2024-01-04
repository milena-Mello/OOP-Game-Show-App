class Phrase {
    constructor(phrase) {
        this.phrase = phrase.toLowerCase();
    }

/**
* Display phrase on game board
*/
    addPhraseToDisplay() {
        const phraseUl = document.querySelector('#phrase ul');
        const phraseLetters = this.phrase.split('');
        phraseLetters.forEach(letter => {
            const li = document.createElement('li');
            li.textContent = letter;
            if (letter === ' ') {
                li.className = 'space';
            } else {
                li.className = `hide letter ${letter}`;
            }
            phraseUl.appendChild(li);
        });
    }
/**
* Checks if passed letter is in phrase
* param (string) letter - Letter to check
*/
    checkLetter(letter) {
        if (this.phrase.includes(letter)) {
            return true;
        } else {
            return false;
        }
    }

/**
* Displays passed letter on screen after a match is found
* param (string) letter - Letter to display
*/
    showMatchedLetter(letter) {
        const matchedLetters = document.querySelectorAll(`.${letter}`);
        matchedLetters.forEach(matchedLetter => {
            matchedLetter.classList.remove('hide');
            matchedLetter.classList.add('show');
        });
    }
}

