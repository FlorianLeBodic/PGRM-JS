// ********************************************* LES EXCEPTIONS *************************************************************************

/*
try {
    // Erreur ?
    alert(hello);
} catch (error) {
    // Si erreur, execute le bloc catch

    // error.name  => Seulement le nom de l'erreur
    // error.message => Le message de l'erreur
    // error.stack => Récupère la stacktrace de l'erreur
    alert("La variable Hello n'existe pas");
    console.log(error.stack); // Affiche dans la console mais pas à l'utilisateur
}
*/


try {
    let recompense = prompt("Choisissez une récompense : épée, arc, haches");
    let degats;

    switch (recompense) {
        case "épée":
            degats = 40;
            break;

        case "arc":
            degats = 30;
            break;

        case "haches":
            degats = 20;
            break;

        default:
            // On lance une erreur
            throw new Error("Vous ne pouvez pas tricher");
    }

    alert("Vous avez choisi : " + recompense + " (" + degats + " dégats).")

} catch (error) {
    alert(error);
}

// Bloc automatiquement executé même si return avant
finally {
    alert("Fin du programme")
}


