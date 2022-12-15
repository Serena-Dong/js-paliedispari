const userNumber = document.getElementById('text');
const button = document.getElementById('button');
const isEven  = document.getElementById('even')
const isOdd = document.getElementById('odd') 



//Funzione per numero random
function getRandomNumber (min = 1, max = 5, maxIncluded = true){
    if (maxIncluded) max++;
    const randomNumber =Math.floor(Math.random()*(max - min) + min);
    
    return randomNumber
}

const generatedNumber = getRandomNumber();
console.log(generatedNumber);

//Funzione per la somma scelta dall'utente e numero random
function addN (a , b) {
    const sum = a + b;
    return sum;
}

const userSum = addN (userNumber, generatedNumber);

//Funzione per dichiarare il vincitore
function whosTheWinner(){
    let result = userSum = 
}

button.addoddtListener('click', )

