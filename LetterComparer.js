class LetterComparer {
    #inputElement;
    #keyHeaderElement;
    #letterFactory;

    constructor(inputElement, keyHeaderElement, SYMBOL_DICTIONARY) {
        this.#inputElement      = inputElement;
        this.#keyHeaderElement  = keyHeaderElement;

        this.#letterFactory = new LetterFactory(this.#keyHeaderElement, SYMBOL_DICTIONARY)
    }

    run() {
        this.#letterFactory.insertKey();
        this.#setInputListener();
    }

    #setInputListener() {
        this.#inputElement.addEventListener("keyup", () => this.#reactOnKeyup());
    }

    #reactOnKeyup() {
        if (this.#inputElement.value.toLowerCase() === this.#keyHeaderElement.innerText.toLowerCase()) {
            this.#inputElement.value = "";
            this.#letterFactory.insertKey();
        }

    }
}