const SYMBOLS_DICTIONARY = "qwertyuiop[]asdfghjkl;'zxcvbnm,./".split("");

let inputElement;
let stringContainer;

const onLoad = () => {
    try {
        assignDOMElements();
        insertStringIntoHeader();
        compareStrings();
    } catch (error) {
        alert(`[ERROR] ${error.message}`);
    }
}

const assignDOMElements = () => {
    inputElement = document.querySelector(".symbols-input");
    stringContainer = document.getElementById("symbols");
}

const insertStringIntoHeader = () => {
    stringContainer.innerText = getRandomString().toUpperCase();
}

const getRandomString = () => {
    const stringFactory = new StringFactory(SYMBOLS_DICTIONARY);

    return stringFactory.createRandomString();
}

const compareStrings = () => {
    const stringComparator = new StringComparator(inputElement, stringContainer);

    stringComparator.setInputListener(isSame => {
        if (isSame) {
            inputElement.value = "";
            insertStringIntoHeader();
        }
    });
}


window.onload = onLoad();
