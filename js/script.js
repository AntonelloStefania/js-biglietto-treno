//calcolo prezzo biglietto intero
let km_utente = parseInt(prompt('Quanti km devi percorrere?').trim());
const tariffa = 0.21;
let biglietto_intero =  km_utente * tariffa;

//sconto applicabile in base all'eta 
let sconto; 

// prezzo biglietto
let biglietto_scontato; 
let tot; 

//programma
let eta = parseInt(prompt('Quanti anni hai?').trim());
if (eta < 18) {
    let sconto = ((biglietto_intero / 5));
    let biglietto_scontato = (biglietto_intero - sconto);
    let tot= biglietto_scontato.toFixed(2);
    document.getElementById("prezzo_biglietto").innerHTML = `${tot} €`;
} else if (eta >= 65) {
    let sconto = (((biglietto_intero / 10) * 4));
    let biglietto_scontato = (biglietto_intero - sconto);
    let tot = biglietto_scontato.toFixed(2);
    document.getElementById("prezzo_biglietto").innerHTML = `${tot} €`;
} else {
    let tot = biglietto_intero.toFixed(2);
    document.getElementById("prezzo_biglietto").innerHTML = `${tot} €`;
}








