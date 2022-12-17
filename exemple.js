// 3 Type de variables uniquement string, number (entier et décimaux) et boolean avec let ou const (var déconseillé)

//const nom = "Dupont";
// Constante 

//let prenom = "Toto";
// chaine de caractères (string) 

let age = 21;
age = 21.56;
// Nombre (number) entier ou décimaux forcément avec le . et pas la ,
console.log(age);


let win = false;
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

let numberOne = 8;
let numberTwo = 4;

//Ou

let numberThree = 2, numberFour = 6, result = ((numberOne + numberTwo) * 9);
// Un let qui initialise toute la ligne

result += 2; // 108 + 2 
result++ // Incrémentation = ajoute 1 donc 111
result-- // Drécemntation
console.log(result);

// alert("Hello World");
// Permet d'afficher une boite de dialogue

// confirm("Souhaitez-vous confirmer ?");
// Affiche OK ou Annuler

// Exemple avec des conditions
/*
if (confirm("Souhaitez-vous confirmer ?")) {
    // oui
    alert("Vous avez dit Ok, c'est ok");

}
else {
    // non
    alert("Vous avez annulé")
}
*/

// Prompt demande une information à un utilisateur
const userAge = prompt("Entrez votre age ?");
alert("Bonjour, vous avez " + userAge + " ans.");

