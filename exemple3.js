// ************************************  LES CONDITIONS  *************************************************************************

/*
let heure = 18;

    == : égal à la valeur
    === : égal à la valeur et au type
    != : différent de la valeur
    !== : différent de la valeur et du type
    > : supérieur
    < : inférieur
    >= : supérieur ou égal
    <= : inférieur ou égal

if (heure < 12) {
    console.log("C'estle matin");
}
else if (heure < 18) {
    console.log("C'est l'apem")
}
else {
    console.log("C'est la soirée");
}



let age = prompt("quel âge avez-vous ?");

function majorite(age) {
    age = Number(age);
    if (age < 18) {
        alert(" Vous n'êtes pas majeur");
    }
    else if (age >= 18 && age <= 20) {
        alert("Vous êtes majeur en France");
    }
    else {
        alert("Vous êtes majeur partout, à vous les casinos !")
    }
}

majorite(age);
*/

// ************************************  LES SWITCH  *************************************************************************
/*
let consommable = "chocolat";

switch (consommable) {
    case "carotte":
    case "haricot":
        console.log("Ceci est un légume");
        break;

    case "banane":
        consologe.log("Ceci est un fruit");
        break;

    default:
        console.log("Ceci n'est ni un fruit, ni un légume");
    // Pas besoin de break car plus d'insutructions ensuite
}
*/
// ************************************  ET (&&) et OR (||) *************************************************************************
/*
let gareDeDepart = "Valenciennes";
let gareDarrive = "Gare du Nord";
let chauffeur = "Aldo";

if ((gareDeDepart != "" || gareDarrive != "") && chauffeur != "") {
    console.log("Le train va démarrer");
} else {
    console.log("Le train ne peut pas démarrer");
}
*/
// ************************************  OPERATEUR NOT  !*************************************************************************
// Le not ! vérifie le contraire d'une condition
/*
let x = 7;

if (!x < 5) {
    console.log("x est inférieur à 5.");
}
else {
    console.log("x n'est pas inférieur à 5");
}
*/

// ************************************ LES CONDITIONS TERNAIRES ********************************************************************

/*
let x = 2;

// [CONDITION] ? [TRUE]  : [FALSE];
x > 3 ? console.log("x est supérieur à 3") : console.log("x inférieur ou égal à 3");

let gareDeDepart = "Valenciennes";
let gareDarrive = prompt("Où souhaitez-vous allez ?") || "Gare Montparnasse";
let chauffeur = "Aldo";

if ((gareDeDepart != "" || gareDarrive != "") && chauffeur != "") {
    alert("Le train va démarrer à destination de " + gareDarrive + ".");
} else {
    alert("Le train ne peut pas démarrer");
}
*/