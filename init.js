(() => {
    try {
        const SYMBOLS_DICTIONARY = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");
        
        const inputElement     = document.querySelector(".key-input");
        const keyHeaderElement = document.getElementById("key");
        
        const letterChecker = new LetterChecker(inputElement, keyHeaderElement, SYMBOLS_DICTIONARY);
        
        letterChecker.run();

    } catch (error) {
        console.log(`[ERROR] ${error.message}`);
    }

})();
