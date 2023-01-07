// ************************************** Les fonctions fléchées ***********************************************************************************

// Fonction anonyme

/*
let maFonction = function () {
    console.log('test');
 }

let maFonction = parametre => {
    console.log("Test");
}

let maFonctionBis = (parametre, autreParametre) => {
    console.log("Test");
}

// Fonction qui prenne pas de paramètres
let maFonctionTer = () => console.log("Test 2");

maFonctionBis();

maFonctionTer();

// ************************************** Les closures ou fermetures ******************************************************************************

// Les closures ou fermtures désignent une fonction dans une fonction

function bonjour(prenom) {

    let resultat = "Bonjour " + prenom; // Variable locale
    let maClosure = () => console.log(resultat);
    return maClosure;
}

let maFonction = bonjour("Evan"); // bonjour("Evan") est une closure qui sauvegarde les variables locales

maFonction();

*/

/*
function timer() {
    let secondes = 0;

    let maClosure = () => {
        // return secondes++ ne marche pas car prend pas en compte l'opérateur ++ et retourne la variable tout de suite
        return ++secondes;
    }

    return maClosure;
}

let monTimer = timer();

console.log(monTimer());
console.log(monTimer());
console.log(monTimer());

let monDeuxiemeTimer = timer();

// Vaut 1 de nouveau car on l'a redéclaré dans une autre variable
console.log(monDeuxiemeTimer());
*/

// ************************************* Les objets **********************************************************************************************

// création d'un objet

let chien = {
    race: "Shiba",
    poil: "Court",
    // aboyer: function () {
    //     console.log("Ouaf Ouaf");
    // }

    // Fonction fléchée anonyme
    aboyer: () => console.log("Ouaf Ouaf"),
}

chien.aboyer();


/*
let magicien = {
    attaquer: function () {
        console.log("Le magicien lance un sort ");
    }
}

let guerrier = {
    attaquer: function () {
        console.log("Le guerrier prend son épée ");
    }
}

magicien.attaquer();
guerrier.attaquer();
*/

// *************************************  Destructuring assignement ou  affectation pour décomposition  ********************************************

// Les tableaux sont des objets donc type référence
let informations = ["superSayen", "25", "homme"];

// Utilisation d'entremetteurs - Méthode sans décomposition
/*
let pseudo = informations[0];
let age = informations[1];
let sexe = informations[2];

console.log(pseudo);
console.log(age);
console.log(sexe);
*/

// Avec décomposition affiche le contenu de pseudo, age, sexe
let [pseudo, age, sexe] = informations;

console.log(pseudo);
console.log(age);
console.log(sexe);


let nombres = [10, 45, 75, 10, 24, 45];

/*
En JavaScript, Set est un objet qui stocke des valeurs uniques de n'importe quel type. 
Les valeurs dans un Set sont des éléments uniques, c'est-à-dire qu'il n'y a pas de doublons. 
Vous pouvez créer un Set en utilisant la syntaxe suivante:
*/
// let monSet = new Set(nombres);

let monSet = new Set();

monSet.add("70");
monSet.add(87);
//monSet.add(["mon", "tableau", "test"]);


// Pour avoir la taille
console.log(monSet.size);
console.log(monSet);
monSet.delete(87);

// L'objet Map  Permet de stocker des paires clé-valeur et de mémoriser leur ordre d'insertion.

// Ce genre d'exemple sera plus utilisé avec des tableaux associatifs
/*
let monMap = new Map([
    ["prenom", "Mark"],
    ["nom", "Zuckerberg"]
]);

monMap.set("poste", "PDG de Facebook");
monMap.delete("poste");

console.log(monMap);
*/

// Map va surtout être utilisé lorsqu'il y a une clé associé à plein de clé-valeurs, comme pour un objet
let utilisateurs = new Map();

utilisateurs.set("Mark Zuckerberg", {
    email: "mark@facebook.com",
    poste: "PDG",
});

utilisateurs.set("Bill Gates", {
    email: "bill@gatesnotes.com",
    poste: "Sauver le monde",
});

console.log(utilisateurs);

/*
L'objet WeakSet Offre une flexibilité supplémentaire en comparaison de l'objet Set. Il n'accepte que des objets.
Une fois que l'objet stocké dans le WeakSet passe à null, il est automatiquement retiré.
*/


/*

let voitureA = {
    constructeur: "Tesla",
    modele: "Cybertruck",
}

let voitureB = {
    constructeur: "Renault",
    modele: "Espace",
}

// let voitures = new WeakSet(); 
// voitures.add(voitureA);
// voitures.add(voitureB);

OU

let voitures = new WeakSet([voitureA, voitureB]);

voitures.delete(voitureA);

console.log(voitures)
/*

/*
L'objet WeakMap Offre une flexibilité supplémentaire en comparaison de l'objet Map.  Il n'accepte que des objets en clé. 
On utilise souvent cet objet pour stocker des données. Une fois que l'objet en clé n'existe plus (par exemple, si sa valeur passe à null), 
la valeur est automatiquement supprimée également.
*/

let voitureA = {
    constructeur: "Tesla",
    modele: "Cybertruck",
}

let voitureB = {
    constructeur: "Renault",
    modele: "Espace",
}

let voituresBis = new WeakMap();

let index = {
    id: 1
}

voituresBis.set(index, voitureA);
console.log(voituresBis);

// ************************************** Récapitulatif Set, Map, WeakSet et WeakMap ************************************************************

/*
L'objet Set - Créer un objet Set

    let monObjet = new Set();
    // ou
    let monObjet = new Set(['un', 'deux', 'trois']);

Ajouter un élément

    monObjet.add('quatre');

Supprimer un élément

    monObjet.delete('quatre');

Supprimer tous les éléments

    monObjet.clear();

Avoir la taille de l'objet (le nombre d'éléments)

    monObjet.size;

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has('un');

Retourner tous les éléments

    monObjet.values();
    // ou
    monObjet.keys();


L'objet Map

Créer un objet Map

    let monObjet = new Map();

Ajouter un élément

    monObjet.set('John Doe', {
        email: 'john@doe.com',
    });

Supprimer un élément

    monObjet.delete('John Doe');

Supprimer tous les éléments

    monObjet.clear();

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has('John Doe');

Retourner un élément

    monObjet.get('John Doe');

Retourner tous les éléments

    monObjet.values();
    // ou
    monObjet.keys();


L'objet WeakSet

Créer un objet WeakSet

    let monObjet = new WeakSet();
    // ou
    let monObjet = new WeakSet([objet1, objet2, objet3]);

Ajouter un élément

    monObjet.add(objet4);

Supprimer un élément

    monObjet.delete(objet4);

Avoir la taille de l'objet (le nombre d'éléments)

    monObjet.length();

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has(objet4);


L'objet WeakMap

Créer un objet WeakMap

    let monObjet = new WeakMap();

Ajouter un élément

    const objet1 = {
        nom: 'John Doe',
    }
     
    monObjet.set(objet1, {
        email: 'john@doe.com',
    });

Supprimer un élément

    monObjet.delete(objet1);

Avoir la taille de l'objet (le nombre d'éléments)

    monObjet.length();

Vérifier si un élément existe (renvoie donc true ou false)

    monObjet.has(objet1);

Retourner un élément

    monObjet.get(objet1);
    */

// ************************************** REST Parameter ************************************************************************************

// ...numbers avec les ... on dit ceci est un REST Parameter et prend un tableau de valeurs

function addition(...numbers) {
    let result = 0;

    numbers.forEach(number => {
        result += number;
    })
    return "Le résultat est de " + result;
}

console.log(addition(4, 9, 5, 415, 78, 54));


// ************************************** L'opérateur de décomposition ************************************************************************************

// Exemple 1  : fusionner plusieurs tableaux
let fruits = ["fraise", "banane", "poire"];

// ...fruits décomposent le tableau et ajoute les aliments
let aliments = ["chocolat", "sucre", "lait", ...fruits];
// let total = aliments.concat(fruits); pour concaténer plusieurs tableaux

console.log(aliments);

// Exemple 2  :  découper une chaîne de caractères en plusieurs éléments
let phrase = "Bonjour !";
let phraseTableau = [...phrase];

console.log(phraseTableau);

// Exemple 3 : sélectionner un élément, et stocker les autres dans une variable 

let devises = ["dollar", "euro", "yen"];

// Sans décomposition
// let premiereDevise = devises[0];
// let autres = [devises[1], devises[2]];


// Avec décomposition
let [premiereDevise, ...autres] = devises;

console.log(premiereDevise);
console.log(autres);
