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
        const overlay = document.querySelector('#overlay');
        overlay.style.display = 'none';
        this.activePhrase = this.getRandomPhrase();
        const phrase = new Phrase(this.activePhrase.phrase);
        phrase.addPhraseToDisplay();
    };
}
