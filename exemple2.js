/*
 Fonction anonyme qu'on execute soit :
 1) Soit on l'utilise dans une variable, notamment avec des objets
 2) Soit en l'auto-invocant, on l'execute alors immédiatement
 3) Soit en l'utilisant dans un évènement

1)
let functionAnonyme = function () {
    console.log("je suis une fonction anonyme");
}

functionAnonyme();
*/

// 2) Autoinvocation avec une structure de base en (function(){})(); et mettre le tout dans les parenthèses
(function () { console.log("Je suis une fonction A NO NYME") })();

// Le résult de cette exemple est de 3900 euros car on créé la fonction et ensuite on initiliase de nouveaux paramètres dans l'appel
// à la fonction
function voyager(nombreAdultes = 0, nombreEnfants = 0, classe = "Economique") {
    let montant = 0;

    if (classe == "Economique") {
        montant = (nombreAdultes * 450) + (nombreEnfants * 100);
    }
    else if (classe == "Business") {
        montant = (nombreAdultes * 950) + (nombreEnfants * 400);
    }
    else {
        montant = (nombreAdultes * 1450) + (nombreEnfants * 1000);
    }

    console.log('Bonjour ! Bienvenue à bord. Voici le montant à payer : ' + montant + ' euros.');
}

voyager(2, 1, "Premiere");