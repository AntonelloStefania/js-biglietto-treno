let km_utente = parseInt(prompt('Quanti km devi percorrere?').trim());
const tariffa = 0.21;
let biglietto_intero =  km_utente * tariffa;
let sconto = ((biglietto_intero / 5));
let sconto_old = (((biglietto_intero / 10) * 4));
let biglietto_scontato = (biglietto_intero - sconto);
let biglietto_scontato_old = (biglietto_intero - sconto_old);


let eta = parseInt(prompt('Quanti anni hai?').trim());
if (eta < 18) {
    let sconto = ((biglietto_intero / 5));
    let biglietto_scontato = (biglietto_intero - sconto);
    document.getElementById("prezzo_biglietto").innerHTML = `${biglietto_scontato} €`;
    } else if (eta >= 65) {
    let sconto_old = (((biglietto_intero / 10) * 4));
    let biglietto_scontato_old = (biglietto_intero - sconto_old);
    document.getElementById("prezzo_biglietto").innerHTML = `${biglietto_scontato_old} €`;
} else {
    document.getElementById("prezzo_biglietto").innerHTML = `${biglietto_intero} €`;
}








