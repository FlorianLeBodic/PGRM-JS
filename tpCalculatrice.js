let resultat;
let choixOperation;

do {
    // let choixOperation à l'intérieur de la boucle ne marche pas car porté de la fonction et non globale
    choixOperation = prompt("Que souhaitez-vous faire ? \n" +
        "1 - Addition \n" +
        "2 - Soustraction \n" +
        "3 - Mutiplication \n" +
        "4 - Division \n");

} while (choixOperation != "1" && choixOperation != "2" && choixOperation != "3" && choixOperation != "4");

function resultix(choixOperation) {
    try {

        let nombreUn = prompt("Choisissez un premier nombre");
        let nombreDeux = prompt("Choisissz un deuxième nombre");
        nombreUn = Number(nombreUn);
        nombreDeux = Number(nombreDeux);

        switch (choixOperation) {
            case "1":
                resultat = nombreUn + nombreDeux;
                break;

            case "2":
                resultat = nombreUn - nombreDeux;
                break;

            case "3":
                resultat = nombreUn * nombreDeux;
                break;

            case "4":
                if (nombreDeux != 0) {
                    resultat = nombreUn / nombreDeux;
                } else {
                    throw new Error("Vous ne pouvez pas diviser par 0");
                }
                break;
        }

        return "Voici le resultat : " + resultat;

    } catch (error) {
        alert(error);

    }

}

alert(resultix(choixOperation));

