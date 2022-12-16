const userWord = document.getElementById("text");
const form = document.getElementById("form");
const display = document.getElementById("result");

//Funzione per il buttone
form.addEventListener("submit", function(event){
    event.preventDefault();


    //Prendo il valore dall'input
    const word = userWord.value.trim();


    //Funzione per invertire le parole
    function reverseWord(word){ 
        let reversedWord = '';
        
        for (let i = word.length - 1; i >= 0; i--){
            reversedWord += word[i];
        }
        return reversedWord;
    }
    
    const checkedWord = reverseWord(word);

    //Definisco se è palindroma oppure no

    function itIs (a, b) {
        return result = a === b;
    }

    const check = itIs(word, checkedWord) ? 'È palindroma' : 'Non è palindroma';

    console.log(check);

});
