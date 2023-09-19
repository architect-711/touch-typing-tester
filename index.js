(() => {
    try {
        const WORDS_DICTIONARY = ['y', 'u'];
        
        const inputElement          = document.querySelector(".key-input");
        const keyHeaderElement      = document.getElementById("key");
        const incorrectTriesElement = document.getElementById("incorrect-tries");
        
        const letterChecker = new LetterChecker(inputElement, keyHeaderElement, incorrectTriesElement, WORDS_DICTIONARY);
        
        letterChecker.run();

    } catch (error) {
        console.log(`[ERROR] ${error.message}`);
    }

})();
