class LetterChecker {
    #inputElement;
    #keyHeaderElement;
    #letterInserter;

    constructor(inputElement, keyHeaderElement, SYMBOL_DICTIONARY) {
        this.#inputElement          = inputElement;
        this.#keyHeaderElement      = keyHeaderElement;

        this.#letterInserter = new LetterInserter(this.#keyHeaderElement, SYMBOL_DICTIONARY)
    }

    run() {
        this.#letterInserter.insertKey();
        this.#setInputListener();
    }

    #setInputListener() {
        this.#inputElement.addEventListener("keyup", () => this.#reactOnKeyup());
    }

    #reactOnKeyup() {
        if (this.#inputElement.value.toLowerCase() === this.#keyHeaderElement.innerText.toLowerCase()) {
            this.#inputElement.value = "";
            this.#letterInserter.insertKey();
        }

    }
}