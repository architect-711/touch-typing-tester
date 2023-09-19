class LetterChecker {
    #MAX_INPUT_LENGTH = 1;
    #WORDS_DICTIONARY = [];

    #inputElement;
    #keyHeaderElement;
    #incorrectTriesElement;

    #incorrectTries = 0;

    constructor(inputElement, keyHeaderElement, incorrectTriesElement, WORDS_DICTIONARY) {
        this.#inputElement          = inputElement;
        this.#keyHeaderElement      = keyHeaderElement;
        this.#incorrectTriesElement = incorrectTriesElement;
        this.#WORDS_DICTIONARY      = WORDS_DICTIONARY;
    }

    run() {
        this.#insertKey();
        this.#setInputListener();
    }

    #setInputListener() {
        this.#inputElement.addEventListener("keyup", event => this.#reactOnKeyup(event));
    }

    #reactOnKeyup(event) {
        if (this.#hasNonCompliance(event)) {
            return this.#handleNonComplianceError();
        }

        this.clearInput();
        this.#insertKey();
    }

    #hasNonCompliance(event) {
        return this.#inputElement.value.length > this.#MAX_INPUT_LENGTH ||this.#keyHeaderElement.innerText.toLowerCase() !== event.key.toLowerCase();
    }

    #insertKey() {
        this.#keyHeaderElement.innerText = this.#getRandomKey().toUpperCase();
    }

    #getRandomKey() {
        return this.#WORDS_DICTIONARY[Math.floor(Math.random() * this.#WORDS_DICTIONARY.length)];
    }

    clearInput() {
        this.#inputElement.value = "";
    }

    #handleNonComplianceError() {
        this.#inputElement.classList.add("red");
        this.#inputElement.value = "";

        this.#incorrectTries++;

        this.#incorrectTriesElement.innerText = this.#incorrectTries;
    }
}