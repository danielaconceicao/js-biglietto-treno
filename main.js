//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let kilometer = prompt('Inserisca il chilometri che desideri percorrere');
let passengerAge = prompt("inserisca l'età del passeggero");

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
let pricePerKilometre = 0.21;

let ticketPrice = Number(kilometer * pricePerKilometre);
let message;
let discount;

if (passengerAge < 18) {
    discount = (20 / 100) * ticketPrice;
    message = `the total discounted price is ${discount.toFixed(2)}`
}else if (passengerAge > 18 && passengerAge <= 64) {
    message = `the total price of the trip is ${ticketPrice.toFixed(2)}`
}else{
    discount = (40 / 100) * ticketPrice;
    message = `the total discounted price is ${discount.toFixed(2)}`
}


console.log(message);
discount.toLocaleString('it-IT', {style: 'currency', currency: 'EUR'}) 

