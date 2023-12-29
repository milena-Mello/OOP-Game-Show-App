class Game {
    constructor() {
        this.missed = 0;
        this.phrases = this.createPhrases();
        this.activePhrase = null;
    }

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


}
