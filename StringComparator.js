class StringComparator {
    #inputElement;
    #stringContainer;

    constructor(inputElement, stringContainer) {
        this.#inputElement     = inputElement;
        this.#stringContainer  = stringContainer;
    }

    setInputListener(callBackFun) {
        this.#inputElement.addEventListener('keyup', () => callBackFun(this.#isSame()));
    }

    #isSame() {
        return this.#inputElement.value.toLowerCase() === this.#stringContainer.innerText.toLowerCase();
    }
}
