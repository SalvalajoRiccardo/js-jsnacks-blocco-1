// JSnack1
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
// var parolaA = prompt("Inserisci parola 1")

// var parolaB = prompt("Inserisci parola 2")

// if (parolaA.length === parolaB.length) {
//     document.getElementById("risultato").innerHTML  = "sono uguali";
// } else if (parolaA.length > parolaB.length ){
//     document.getElementById("risultato").innerHTML  = parolaB + " " + parolaA;
// } else {
//     document.getElementById("risultato").innerHTML  = parolaA + " " + parolaB;
// }

// JSnack2
// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri   inseriti. Esegui questo programma in due versioni, con il for e con il while.

// var somma = 0;
// for (i = 0; i < 5; i++) {
//     var numero = parseInt(prompt());
//     somma += numero;
// }

// var i = 0;
// while (i < 5) {
//     var numero = parseInt(prompt());
//     somma += numero;
//     i++;
// }
    
// console.log(somma);

// JSnack3
// Crea un array vuoto. 
// Chiedi per 6 volte all’utente di inserire un numero, 
// se è dispari inseriscilo nell’array

// var array = [];

// for (var i = 0; i < 6; i++ ) {
//     var numero = parseInt(prompt());
//     if(numero % 2 != 0 ) {
//         array.push(numero);
//     }
// }

// console.log(array);


// JSnack4
// In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby, chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.

var lista = ['marco', 'giulio','giacomo', 'mattia', 'matteo'];
var id = prompt().toLocaleLowerCase();

var ris = false;

var i = 0;
while (i < lista.length && ris == false) {
    if (id == lista[i] ) {
        ris = true;
    }
    i++
}

console.log(i);

if (ris == true) {
    document.getElementById('idlista').innerHTML = 'Accesso consentito';
} else {
    document.getElementById('idlista').innerHTML = 'Accesso negato';
}