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
}

