// ************************************** Portée des variables ***********************************************************************************
/*
let variableLet = "globale";
var variableVar = "globale";

if (true) {
    let variableLet = "locale";
    var variableVar = "locale";
    console.log("let : " + variableLet);
    console.log("var : " + variableVar);
}

console.log("let : " + variableLet);
console.log("var : " + variableVar);
*/

// ************************************** Fonction récursive **************************************************************************************
/*
// Décompter les secondes
function timer(secondes) {
    if (secondes > 0) {
        console.log(secondes);
        timer(secondes - 1);
    }
    else {
        console.log(secondes);
    }
}

timer(10);
*/

// TP - Calculer le nombre en paramètre plus tous les nombres en décrémentant de 1
function somme(nombre) { // 3

    if (nombre == 1) {
        return 1;
    }

    // retourner 2 + somme(1)
    return nombre + somme(nombre - 1); // 2

    // 3 + 2 + 1 = 6;
}

console.log(somme(3));