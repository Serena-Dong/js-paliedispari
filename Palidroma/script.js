const userWord = document.getElementById("text");
const btn = document.getElementById("button");
const result = document.getElementById("result");

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



btn.addEventListener("click", function(){
    if ( word !== checkedWord){
        result.innerText = "Non è Palidroma";
        console.log(checkedWord);
    } else {
        result.innerText = "È Palidroma";
        console.log(checkedWord);

    }
});
