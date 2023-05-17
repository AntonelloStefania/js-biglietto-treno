let km_utente = parseInt(prompt('Quanti km devi percorrere?').trim());
console.log(km_utente,typeof km_utente)
const tariffa = 0.21;
let biglietto_intero =  km_utente * tariffa;
console.log(biglietto_intero)
let sconto;
console.log(sconto)
//let sconto_old;
//console.log(sconto_old)
let biglietto_scontato;
console.log (biglietto_scontato)


let eta = parseInt(prompt('Quanti anni hai?').trim());
if (eta < 18) {
    let sconto = ((biglietto_intero / 5));
    console.log(sconto);
    let biglietto_scontato = (biglietto_intero - sconto);
    console.log(biglietto_scontato);
    } else if (eta >= 65) {
    let sconto = (((biglietto_intero / 10) * 4));
    console.log(sconto);
    let biglietto_scontato = (biglietto_intero - sconto);
    console.log(biglietto_scontato);
} else {
    let biglietto_intero = biglietto_scontato;
    console.log(biglietto_intero);
}

document.getElementById("prezzo_biglietto").innerHTML = biglietto_scontato







console.log(biglietto_scontato_old);