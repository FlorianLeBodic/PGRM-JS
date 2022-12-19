// 3 Type de variables uniquement string, number (entier et décimaux) et boolean avec let ou const (var déconseillé)
// Variables nommées en Camel Case

//const nom = "Dupont";
// Constante 

//let prenom = "Toto";
// chaine de caractères (string) 

let age = 21;
age = 21.56;
// Nombre (number) entier ou décimaux forcément avec le . et pas la ,
console.log(age);


let victoire = false;
// Boleen (boolean)

const prenom = "Toto";
const nom = "Janus";

console.log("Bonjour " + prenom.toUpperCase() + " " + nom.toUpperCase() + " !");
// Concaténation avec Javascript + +

// Opérateur
// + addition
// - soustraction
// / division
// % modulo division avc reste 5/2 = dividende 2 reste 1 donc le modulo c'est 1
// ** exponentielle  5**2 = 25

let nombreUn = 8;
let nombreDeux = 4;

//Ou

let nombreTrois = 2, nombreQuatre = 6, resultat = ((nombreUn + nombreDeux) * 9);
// Un let qui initialise toute la ligne

resultat += 2; // 108 + 2 
resultat++ // Incrémentation = ajoute 1 donc 111
resultat-- // Drécemntation
console.log(resultat);

// alert("Bonjour le monde !");
// Permet d'afficher une boite de dialogue

// confirm("Souhaitez-vous confirmer ?");
// Affiche OK ou Annuler

// Exemple avec des conditions
/*
if (confirm("Souhaitez-vous confirmer ?")) {
    // oui
    alert("T'es O.K., t'es Bath, t'es In !");

}
else {
    // non
    alert("Vous avez annulé")
}
*/

/* Prompt demande une information à un utilisateur
const userAge = prompt("Entrez votre age ?");
alert("Bonjour, vous avez " + userAge + " ans.");
*/

// Les fonctions sans paramètres
// Respecter le Camel Case
// Créer la fonction

/*
function direBonjour() {
    let prenom = "Toto";
    let bonjour = "Bonjour " + prenom;
    alert(bonjour);
}
*/
// Appeler la fonction
//direBonjour();

// Fonction d'addition qui prend en paramètre 2 nombres
function addition(nombreUn, nombreDeux) {
    console.log(nombreUn + nombreDeux);
}

// Sans paramètre ou avec un paramètre, ça va afficher NaN (fromage) ou Not a Number
// addition();
// addition(nombreUn);

// Avec plus de 2 paramètres, il prendra en compte que les 2 premiers visiblement
// addition(nombreUn, nombreDeux, nombreTrois, nombreQuatre);

// La fonction peut prendre des variables ou directement des numbers
addition(nombreUn, nombreDeux);

addition(4, 9.4);

/*
let surnom = prompt("votre surnom ?");

function direBonjour(surnom) {
    alert("Bonjour " + surnom + " ,toi aussi apprends le Javascript !");
}

direBonjour(surnom);
*/

// Variable globale 
let cri = "Pour la Horde !";

function criDeGuerre() {
    // let cri; variable qui est détruite à la fin de la fonction
    let cri = "Toujours plus fort !";
    console.log(cri);
}
criDeGuerre();
console.log(cri);

/*
let nombre1 = 4, nombre2 = 7;

function additionBis(nombreA, nombreB) {
    let resultat = nombreA + nombreB;
    //Affiche l'opératione et le résultat
    // console.log("Vous avez additionné " + nombre1 + " et " + nombre2 + " ,le résultat est de " + resultat);
    return resultat;
}

function division(nombreA, nombreB) {
    let resultat = nombreA / nombreB;
    return resultat;
}

let resultatAddition = additionBis(nombre1, nombre2);
let resultatDivision = division(nombre1, nombre2);

console.log(resultatAddition * resultatDivision);
*/

let nombre1 = 4, nombre2 = 7;

function additionBis(nombreA, nombreB = 10) {
    let resultat = nombreA + nombreB;
    return resultat;
}

// Vaudra 14
console.log(additionBis(nombre1));

// Vaudra 11
console.log(additionBis(nombre1, nombre2));

// Gâteau au chocolat 
let preparation = 10, cuisson = 15;

function cuisiner(nombreDeGateaux, minutesDePreparation = 10, minutesDeCuisson = 15) {
    let resultat = nombreDeGateaux * (minutesDeCuisson + minutesDePreparation);
    return resultat;
}

let tempsDePrepationChocolat = cuisiner(4)
let tempsDePrepationFraisier = (1, 20);
console.log(tempsDePrepationChocolat + tempsDePrepationFraisier)


function quelAge() {
    let name = prompt("Comment vous appelez vous ?");
    let years = prompt("Quel age avez-vous ?"); // JS stock ça en chaîne de caractère si on utilise prompt => "30" +1 donc = 301;
    // years = parseInt(years); // Convertit en age
    // years = parseFloat(years);
    years = Number(years);

    // nombreEnString = nombre + ""; // méthode barbare mais savoir que ça existe
    // nombreEnString = nombre.toString(32); // convertit le nombre en string

    // Typage recommandé pour les conversions
    // number = Number();
    // string = String();
    // boolean = Boolean();huhuhhfh
    alert("Bonjour, " + name + ",bientôt vous aurez " + (years + 1) + " ans !");
}

quelAge();






