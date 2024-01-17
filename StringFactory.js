class StringFactory {
    #SYMBOLS_DICTIONARY = [];

    constructor(SYMBOLS_DICTIONARY) {
        this.#SYMBOLS_DICTIONARY = SYMBOLS_DICTIONARY;
    }

    createRandomString() {
        let randomString = "";

        for (let index = 0; index < this.#getRandomNumber(); index++)
            randomString += this.#getRandomLetter();

        return randomString;
    }

    #getRandomLetter() {
        return this.#SYMBOLS_DICTIONARY[this.#getRandomNumber()];
    }

    #getRandomNumber() {
        return Math.floor(Math.random() * this.#SYMBOLS_DICTIONARY.length);
    }
}
