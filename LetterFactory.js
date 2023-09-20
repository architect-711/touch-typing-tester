class LetterFactory {
    #SYMBOLS_DICTIONARY = [];
    
    #keyHeaderElement;

    constructor(keyHeaderElement, SYMBOLS_DICTIONARY) {
        this.#keyHeaderElement   = keyHeaderElement;
        this.#SYMBOLS_DICTIONARY = SYMBOLS_DICTIONARY;
    }

    insertKey() {
        this.#keyHeaderElement.innerText = this.#createRandomString().toUpperCase();
    }

    #createRandomString() {
        let randomString = "";

        for (let index = 0; index < this.#getRandomLength(); index++)
            randomString += this.#getRandomLetter();

        return randomString;
    }

    #getRandomLetter() {
        return this.#SYMBOLS_DICTIONARY[Math.floor(Math.random() * this.#SYMBOLS_DICTIONARY.length)];
    }

    #getRandomLength() {
        return Math.floor(Math.random() * this.#SYMBOLS_DICTIONARY.length);
    }
}