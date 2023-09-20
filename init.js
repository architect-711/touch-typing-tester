(() => {
    try {
        const SYMBOLS_DICTIONARY = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
        
        const inputElement     = document.querySelector(".symbols-input");
        const keyHeaderElement = document.getElementById("symbols");
        
        const letterComparer = new LetterComparer(inputElement, keyHeaderElement, SYMBOLS_DICTIONARY);
        
        letterComparer.run();

    } catch (error) {
        console.log(`[ERROR] ${error.message}`);
    }

})();
