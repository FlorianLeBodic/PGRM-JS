// ************************************  LES BOUCLES  *************************************************************************
/*
let i = 1;

// S'éxecute à chaque fois que la condition est vrai donc doit devenir fausse à un moment sinon boucle infinie

while (i < 5) {
    console.log("Ligne: " + i);
    i++;
}


// Do ...while s'exécute au moins une fois 

let prenom;
do {
    prenom = (prompt("Quel est votre prénom ?"));
} while (prenom == "" || prenom == null);

alert("Bonjour " + prenom);


for (let i = 1; i < 5; i++) {
    console.log("Ligne : " + i);
}
*/

let i = 0;
while (i < 5) {

    if (i == 3) {
        // Casse la boucle et l'arrête
        break;
    }
    console.log("Ligne : " + i);
    i++;
}

// plus rare d'utilisation
while (i < 5) {

    if (i == 3) {
        // Casse la boucle et l'arrête

        i++;
        continue;
    }
    console.log("Ligne : " + i);
    i++;
}
