JSnack1

var parolaA = prompt("Inserisci parola 1")

var parolaB = prompt("Inserisci parola 2")

if (parolaA.length === parolaB.length) {
    document.getElementById("risultato").innerHTML  = "sono uguali";
} else if (parolaA.length > parolaB.length ){
    document.getElementById("risultato").innerHTML  = parolaB + " " + parolaA;
} else {
    document.getElementById("risultato").innerHTML  = parolaA + " " + parolaB;
}

