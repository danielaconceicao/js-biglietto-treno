//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let kilometer = Number(prompt('Inserisca il chilometri che desideri percorrere'));
let passengerAge = Number(prompt("inserisca l'età del passeggero"));

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
let pricePerKilometre = 0.21;

//prezzo normale senza sconti
let ticketPrice = kilometer * pricePerKilometre;
let formattedTicketPrice = ticketPrice.toLocaleString('it-IT', {style: "currency", currency: 'EUR'});


//va applicato uno sconto del 20% per i minorenni
let discountForMinors = (20 / 100) * ticketPrice;
discountForMinors = ticketPrice - discountForMinors;
let discountForMinorsFormatted = discountForMinors.toLocaleString('it-IT', {style: "currency", currency: 'EUR'});
 
//va applicato uno sconto del 40% per gli over 65.
let discountForSeniors = (40 / 100) * ticketPrice;
discountForSeniors = ticketPrice - discountForSeniors;
let discountForSeniorsFormatted = discountForSeniors.toLocaleString('it-IT', {style: "currency", currency: 'EUR'})

let message;

if (passengerAge < 18) {
    message = `total price with discount is ${discountForMinorsFormatted}`;
} else if (passengerAge > 65) { 
    message = `total price with discount is ${discountForSeniorsFormatted}`;
} else { 
    message = `the total price of the trip is ${formattedTicketPrice}`;
}


console.log(message);