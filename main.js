//Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero
let kilometer = Number(prompt('Inserisca il chilometri che desideri percorrere'));
let passengerAge = prompt("inserisca l'età del passeggero");

//il prezzo del biglietto è definito in base ai km (0.21 € al km)
let pricePerKilometre = Number(0.21);

//prezzo normale senza sconti
let ticketPrice = Number(kilometer * pricePerKilometre);
let formattedTicketPrice = ticketPrice.toLocaleString('it-IT', {style: "currency", currency: 'EUR'});


//va applicato uno sconto del 20% per i minorenni
let discountForMinors = Number((20 / 100) * ticketPrice);
let discountForMinorsFormatted = discountForMinors.toLocaleString('it-IT', {style: "currency", currency: 'EUR'});

//va applicato uno sconto del 40% per gli over 65.
let discountForSeniors = Number((40 / 100) * ticketPrice);
let discountForSeniorsFormatted = discountForSeniors.toLocaleString('it-IT', {style: "currency", currency: 'EUR'})

let message;

if (passengerAge < 18) {
    message = `the total discounted price is ${discountForMinorsFormatted}`;
} else if (passengerAge > 18 && passengerAge < 65) { 
    message = `the total price of the trip is ${formattedTicketPrice}`;
} else { 
    message = `the total discounted price is ${discountForSeniorsFormatted}`;
}


console.log(message);