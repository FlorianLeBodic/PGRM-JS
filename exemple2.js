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
//(function () { console.log("Je suis une fonction A NO NYME") })();

// Le résult de cette exemple est de 3900 euros car on créé la fonction et ensuite on initiliase de nouveaux paramètres dans l'appel
/* à la fonction
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
*/

/* Exercice 1 - Module 7
function abracadabra() {
    let prenom = prompt("Quel est votre prénom?");
    let nom = prompt("Quel est votre nom ?");
    let age = prompt("Quel est votre âge ?");
    age = Number(age);

    alert("Sapristi ! On ne m'avait pas prévenu que c'était vous, "
        + prenom +
        " ! Euh... Je veux dire... Monsieur le grand magicien "
        + nom +
        " ! Cela fait déjà "
        + age +
        " ans que vous faites rayonner notre contrée !");
}

abracadabra();
*/

/*
let poids = prompt("Quel est votre poids en kg ? Exemple 68,4")
let taille = prompt("Quel est votre taille en centimètre ? Exemple 175");

// Pour que le calcul prenne en compte des , pour les décimaux à la place des . on peut faire : 
// let var = var.replace(",", ".")); => Permet de pouvoir convertir une string du prompt avec des décimaux notés 1.5 ou 1,5 :D

// Cette fonction peut avoir 2 fois moins de lignes mais par soucis de clarté on laisse comme ça 
function caculerIMC(poids, taille) {

    poids = poids.replace(',', '.');
    poids = parseFloat(poids);

    taille = taille.replace(',', '.');
    taille = parseFloat(taille / 100);

    resultat = poids / (Math.pow(taille, 2))
    // resultat = poids / (taille ** 2);

    resultat = resultat.toFixed(2);
    //toFixed arrondi à 2 décimals après la virgule

    return "Votre IMC est de " + resultat + " !";
}

alert(caculerIMC(poids, taille));
*/