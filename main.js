//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let kilometer = prompt('Inserisca il chilometri che desideri percorrere');
let passengerAge = prompt("inserisca l'età del passeggero");

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
let ticketPrice = 0.21;

let pricePerKilometre = kilometer * ticketPrice;
console.log(pricePerKilometre);
