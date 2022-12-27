

// ****************************************************************   TP Calculatrice *********************************************************************************** 

/*
let resultat;
let choixOperation;
let siOk;

function choixDuCalcul() {

    do {
        // let choixOperation à l'intérieur de la boucle ne marche pas car porté de la fonction et non globale
        choixOperation = prompt("Que souhaitez-vous faire ? \n" +
            "1 - Addition \n" +
            "2 - Soustraction \n" +
            "3 - Mutiplication \n" +
            "4 - Division \n");

        return choixOperation;

    } while (choixOperation != "1" && choixOperation != "2" && choixOperation != "3" && choixOperation != "4");

}

function additioner(nombreA, nombreB) {
    return nombreA + nombreB;
}

function soustraire(nombreA, nombreB) {
    return nombreA - nombreB;
}

function multiplier(nombreA, nombreB) {
    return nombreA * nombreB;
}

function diviser(nombreA, nombreB) {
    return nombreA / nombreB;
}

function resultix(choixOperation) {
    try {
        let nombreUn;
        let nombreDeux;

        do {
            nombreUnUtilisateur = prompt("Choisissez un premier nombre");
            nombreDeuxUtilisateur = prompt("Choisissz un deuxième nombre");
            nombreUn = Number(nombreUnUtilisateur);
            nombreDeux = Number(nombreDeuxUtilisateur);

            if ((isNaN(nombreUn) || nombreUnUtilisateur.length === 0 || nombreUnUtilisateur === null) || (isNaN(nombreDeux) || nombreDeuxUtilisateur.length === 0 || nombreDeux === null)) {
                alert("Veuillez taper obligatoirement 2 nombres");
            }

            // Attention en Javacript nombreUn == "" équivaut à nombreUno == 0. Javascript...
        } while ((isNaN(nombreUn) || nombreUnUtilisateur.length === 0 || nombreUnUtilisateur === null) || (isNaN(nombreDeux) || nombreDeuxUtilisateur.length === 0 || nombreDeux === null));


        // true si la valeur fournie vaut NaN (Not a Number) c'est-à-dire n'est pas nombre, sinon, la méthode renverra false.
        switch (choixOperation) {
            case "1":
                resultat = additioner(nombreUn, nombreDeux);

            case "2":
                resultat = soustraire(nombreUn, nombreDeux);
                break;

            case "3":
                resultat = multiplier(nombreUn, nombreDeux);
                break;

            case "4":
                if (nombreDeux != 0) {
                    resultat = diviser(nombreUn, nombreDeux);
                } else {
                    throw new Error("Vous ne pouvez pas diviser par 0")
                }
                break;
            default:
                alert("Une erreur est survenue !");
        }

        return "Voici le resultat : " + resultat;

    } catch (error) {
        alert(error);

    }

}

function nouveauCalcul() {
    do {
        choixDuCalcul();
        alert(resultix(choixOperation));
        siOk = confirm("Souhaitez-vous refaire un calcul ? ");
    } while (siOk);
}

nouveauCalcul();
*/


// ***********************************************************  CORRECTION ************************************************************************
// Fonction pour additionner
function addition(nombreA, nombreB) {
    return nombreA + nombreB;
}

// Fonction pour soustraire
function soustraction(nombreA, nombreB) {
    return nombreA - nombreB;
}

// Fonction pour multiplier
function multiplication(nombreA, nombreB) {
    return nombreA * nombreB;
}

// Fonction pour diviser
function division(nombreA, nombreB) {
    if (nombreB == 0) {
        throw new Error("Impossible de diviser par 0");
    }
    return nombreA / nombreB;
}

do {
    var choix = Number(prompt("Que souhaitez-vous faire ? \n \n" +
        "1 - Addition \n" +
        "2 - Soustraction \n" +
        "3 - Mutiplication \n" +
        "4 - Division \n"));
} while (choix != 1 && choix != 2 && choix != 3 && choix != 4)


// Demande deux nombres
do {
    var premierNombre = Number(prompt("Entrez un premier nombre : "));
    var deuxiemeNombre = Number(prompt("Entrez un deuxième nombre : "));
} while (isNaN(premierNombre) || isNaN(deuxiemeNombre))

try {

    switch (choix) {
        case 1:
            var resultat = addition(premierNombre, deuxiemeNombre);
            break;

        case 2:
            var resultat = soustraction(premierNombre, deuxiemeNombre);
            break;

        case 3:
            var resultat = multiplication(premierNombre, deuxiemeNombre);
            break;

        case 4:
            var resultat = division(premierNombre, deuxiemeNombre);
            break;

        default:
            throw new Error("Une erreur est survenue");
    }

    // Placer
    alert("Voici le résultat" + resultat);

} catch (error) {
    alert(error);
}



