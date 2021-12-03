const km = parseInt(prompt('Quanti km deve percorrere?'));
let kmElement = document.getElementById ('km');

const birthDay = parseInt(prompt('Inserire anno di nascita'));

//calcolo prezzi
let prezzo = km * 0.21;

//età
let now = new Date ();
let data = now.getFullYear()+'-'+(now.getMonth()+1)+'-'+now.getDate();
let dataElement = document.getElementById('data');
dataElement.innerHTML = `${data}`;

let age = now.getFullYear() - birthDay;

console.log(age);

//calcolo il prezzo in base all'età
if (age < 18) {
    sconto = 0.20;
} else if (age < 65) {
    sconto = 0;
} else {
    sconto = 0.40;
}

let valoreSconto = (1- sconto);
console.log(valoreSconto);

let prezzoFinale = prezzo * valoreSconto;
let prezzoTotale = prezzoFinale.toFixed(2);
let prezzoElement = document.getElementById('prezzo');
prezzoElement.innerHTML = `${prezzoTotale}`;

