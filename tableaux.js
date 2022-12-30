// Déclaration de tableau avant
// let monVieuxTableau = new Array("un", "deux", "trois");
// let monVieuxTableau2 = Array("un", "deux", "trois");

// Déclaration de tableau maintenant comme en Java et PHP
let monTableau = ["un", "deux", "trois", "quatre"];


// Ancienne syntaxe tabeau à plusieurs dimension 
// let monVieuxTableau2D = new Array(
//     Array("Mark", "Jeff", "Bill"),
//     Array("Zuckerberg", "Bezos", "Gates"),
// );

// Nouvelle syntaxe pour les tabeau à plusieurs dimension 
let monTableau2D = [
    ["Mark", "Jeff", "Bill"],
    ["Zuckerberg", "Bezos", "Gates"],
];

// Créér un tableau associatif avec des crochets {} => On associe une clé à un élément
let monTableauAssociatif = {
    "prenom": "Mark",
    "nom": "Zuckerberg",
    "poste": "PDG de facebook"
};

// Accéder à un élément du tableau - attention tableau commence par l'index 0 comme en PHP/Java
console.log(monTableau[0]);
console.log(monTableau[2]);

console.log(monTableau2D[0][2]);
console.log(monTableau2D[1][2]);

// Faire appel à la clé qui affiche la valeur
console.log(monTableauAssociatif["poste"]);

// Connaître la taille d'un tableau (ou son nombre d'index) 
console.log(monTableau.length);

// Affiche l'index du dernier élément du tableau 
console.log(monTableau[monTableau.length - 1]);

// Ajouter un élément au début du tableau 
monTableau.unshift("zéro");

// Ajouter un élément à la fin du tableau
monTableau.push("cinq");

// Affiche tous les éléments du tableau 
console.log(monTableau);

// Ajouter un élément dans un tableau à la 1ère dimension. Ici va rajouter test comme 3ème éléments après les tableaux
//   ["Mark", "Jeff", "Bill"], et ["Zuckerberg", "Bezos", "Gates]
monTableau2D.push("test");
console.log(monTableau2D);

// Ajouter un élément dans un tableau à la 2ème dimension 
monTableau2D[1].push("test");
console.log(monTableau2D[1]);

// Ajouter un élément dans un tableau associatif
monTableauAssociatif["nationalite"] = "Américaine";
console.log(monTableauAssociatif);

// Supprimer le dernier index d'un tableau 
monTableau.pop();

// Supprimer le premier élément d'un tableau => Attention car cela modifie les index du tableau
monTableau.shift();
console.log(monTableau);

// Supprimer des éléments depuis un tableau à 2 dimensions
monTableau2D[0].shift();
console.log(monTableau2D[0]);

// Supprimer des éléments depuis un tableau associatif delete(monTableauAssociatif.laClé)
delete (monTableauAssociatif.poste);

// Trouver une valeur à partir d'un index mais valable que pour les tableaux à une dimension, pas à 2 dimensions ou associatifs 
console.log(monTableau.indexOf("deux"));

// Utiliser la méthode join() pour transformer le tableau en chaîne de caractères (string) + préciser le séparteur
console.log(monTableau.join(", "));

// Utiliser une fonction pour supprimer des éléments pour des tableaux en 1D ou 2D mais pas associatifs
// monTableau.splice(0, 2);

// Rajouter des éléments à partir de l'index 1, il ajoute en se plaçant juste devant l'index 1 entre le 0 et le 1
monTableau.splice(1, 0, "random", "pie");
console.log(monTableau);

//Supprimer uniquement Jeff
console.log(monTableau2D[0]);
monTableau2D[0].splice(0, 1);
console.log(monTableau2D[0]);

// Splice le premier chiffre indique l'index auquel on veut démarrer, le second, le nombre d'élément qu'on veut supprimer 
// et le 3ème ce qu'on veut ajouter ou remplacer
monTableau2D.splice(3, 0, ["30", "45", "75"]);
console.log(monTableau2D);

// La boucle for in
let panier = ["fraise", "banane", "poire"];

// Créer une constante à chaque itération qui s'appeler fruit en rapport avec notre tableau panier
// La variable fruit contient l'index
// panier[fruit] va donc afficher les éléments à l'index X

for (const fruit in panier) {
    console.log(fruit);
    console.log(panier[fruit]);
}

// Transforme les fruits pour en faire des pommes
for (const fruit in panier) {
    panier[fruit] = "pomme";
}

console.log(panier);

// La boucle for off affiche directement les éléments sans passer par l'index et est plus utilisée désormais
let panierDeLegumes = ["carottes", "haricots", "salade"];

for (const legumes of panierDeLegumes) {
    console.log(legumes);

    // Ici on récupère l'index de l'élement
    console.log(panierDeLegumes.indexOf(legumes));
}

// La boucle foreach
let listeDePays = ["France", "Belgique", "Japon", "Maroc"];

// première version
// listeDePays.forEach(function (pays) {
//     console.log(pays);
// });

// foreach fonction fléchée
listeDePays.forEach(pays => console.log(pays));

// Concaténer un tableau associatif

let monNouveauTableauAssociatif = {
    "prenom": "Mark",
    "nom": "Zuckerberg",
    "poste": "PDG de facebook"
};

/*
let chaine = "";

for (const valeur in monNouveauTableauAssociatif) {
    chaine += (valeur + " : " + monNouveauTableauAssociatif[valeur] + "\n");
}

console.log(chaine);
*/

function tableauAssociatifEnChaine(tableauAssociatif) {
    let chaine = "";

    for (const valeur in tableauAssociatif) {
        chaine += (valeur + " : " + tableauAssociatif[valeur] + "\n");
    }
    console.log(chaine);
}

tableauAssociatifEnChaine(monNouveauTableauAssociatif);