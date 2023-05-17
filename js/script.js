let km_utente = parseInt(prompt('Quanti km devi percorrere?').trim());
const tariffa = 0.21;
let biglietto_intero =  km_utente * tariffa;
let sconto = ((biglietto_intero / 5));
let sconto_old = (((biglietto_intero / 10) * 4));
let biglietto_scontato = (biglietto_intero - sconto);
let biglietto_scontato_old = (biglietto_intero - sconto_old);
let tot_min = biglietto_scontato.toFixed(2);
let tot_old = biglietto_scontato_old.toFixed(2);
let tot = biglietto_intero.toFixed(2);


let eta = parseInt(prompt('Quanti anni hai?').trim());
if (eta < 18) {
    let biglietto_scontato = (biglietto_intero - sconto);
    document.getElementById("prezzo_biglietto").innerHTML = `${tot_min} €`;
} else if (eta >= 65) {
    let biglietto_scontato_old = (biglietto_intero - sconto_old);
    document.getElementById("prezzo_biglietto").innerHTML = `${tot_old} €`;
} else {
    document.getElementById("prezzo_biglietto").innerHTML = `${tot} €`;
}








