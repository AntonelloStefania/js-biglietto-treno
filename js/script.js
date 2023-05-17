//calcolo prezzo biglietto intero
let km_utente = parseInt(prompt('Quanti km devi percorrere?').trim());
const tariffa = 0.21;
let biglietto_intero =  km_utente * tariffa;

//sconto applicabile in base all'eta 
let sconto; 

// prezzo biglietto
let biglietto_scontato; 
let tot; 

//prompt eta
let eta = parseInt(prompt('Quanti anni hai?').trim());

//programma

if (isNaN(km_utente) || isNaN(eta)){
    alert('è necessario inserire un numero in entrambi i campi') 
} else if (km_utente === 0 || eta === 0) {
    alert('il valore del campo non può essere 0')
} else{
if (eta < 18) {
    let sconto = ((biglietto_intero / 5));
    let biglietto_scontato = (biglietto_intero - sconto);
    document.getElementById("prezzo_biglietto").innerHTML = `${biglietto_scontato.toFixed(2)} €`;
} else if (eta >= 65) {
    let sconto = (((biglietto_intero / 10) * 4));
    let biglietto_scontato = (biglietto_intero - sconto);
    document.getElementById("prezzo_biglietto").innerHTML = `${biglietto_scontato.toFixed(2)} €`;
} else {
    document.getElementById("prezzo_biglietto").innerHTML = `${biglietto_intero.toFixed(2)} €`;
}
}