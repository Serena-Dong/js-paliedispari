const userWord = document.getElementById("text");
const btn = document.getElementById("button");
const display = document.getElementById("result");

//Funzione per il buttone
btn.addEventListener("click", function(){

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
        let result = a === b ? true : false ; 
        return result
    }


    if ( itIs(word, checkedWord)){
        console.log("È Palindroma");
        console.log(word, checkedWord);
    } else {
        console.log("Non è Palindroma");
        console.log(word, checkedWord);
    }
});
