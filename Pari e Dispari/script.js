const numberField = document.getElementById('text');
const result = document.getElementById('result');
const choiceField  = document.getElementById('select')
const form  = document.getElementById('form')




//Funzione per numero random
function getRandomNumber (min, max, maxIncluded = true){
    if (maxIncluded) max++;
    const randomNumber =Math.floor(Math.random()*(max - min) + min);
    
    return randomNumber
}

//Funzione per dichiarare se è pari o no
function isEven(number){
    return number % 2 === 0; 
}

form.addEventListener('submit', function(event) {
    event.preventDefault()

    //Recupero i dati
    const userNumber = parseInt(numberField.value.trim());
    const userChoice = choiceField.value;

    //Numero random CPU
    const cpuNumber = getRandomNumber(1 , 5);
    console.log(cpuNumber)

    //Sommo i numeri
    const sum = userNumber + cpuNumber;
    console.log(sum);

    //Individuo scelta corretta
    const rightChoice = isEven(sum) ? 'even' : 'odd';

    //Individuo il vincitore
    const winner = userChoice === rightChoice ? 'User' : 'CPU';

    //Stampo
    result.innerText = 'Ha vinto ' + winner;
});










