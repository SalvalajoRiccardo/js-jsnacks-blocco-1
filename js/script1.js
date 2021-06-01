// JSnack1
// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.
var parolaA = prompt("Inserisci parola 1")

var parolaB = prompt("Inserisci parola 2")

if (parolaA.length === parolaB.length) {
    document.getElementById("risultato").innerHTML  = "sono uguali";
} else if (parolaA.length > parolaB.length ){
    document.getElementById("risultato").innerHTML  = parolaB + " " + parolaA;
} else {
    document.getElementById("risultato").innerHTML  = parolaA + " " + parolaB;
}





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