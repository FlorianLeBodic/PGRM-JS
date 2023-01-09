// ************************************************************** MANIPULER LE DOM ***************************************************************

/*

// Récupérer un sélecteur
let hearder = document.getElementsByTagName("p");

// Récupère un élément avec un id
let logo = document.getElementById("logo");

// Récupérer un élément par le nom de la classe
let container = document.getElementsByClassName("container");

// Récupérer un élément
let h1 = document.querySelector("h1");

// Récupérer tous mes balises "p", toutes mes classes .p et tous mes id #p
let p = document.querySelectorAll("p")

console.log(hearder);
console.log(logo);
console.log(container);

// Créer une NodeList c'est-à-dire une liste de noeuds, les noeuds correspondant à chaque élémment, dans notre cas chaque paragraphe. 
console.log(p);

// Modifie un élément HTML
h1.textContent = "Hello World";

// Modifie le premier élément retrouvé 
h1[0].textContent = "Hello Wordl !"

h1.innerHTML = "<div style= 'font-weight: normal'>Hello World </div>";

console.log(h1);

*/


// pour la liste des éléments : https://developer.mozilla.org/fr/docs/Web/API/Element

// Ajouter des éléments au DOM

// 1ère méthode : Ecrit juste du texte pour voir que la page est bien connecté, écrit la suite du contenu avec des chaînes de caractères ou chiffre

document.write("test");

// 2ème méthode : Ajouter un élément brut 

// let body = querySelector("body"); est remplacé par
let h1 = document.querySelector("h1");

h1.append(" test");

// 3ème méthode (celle pour les objets)
// Créer un élément
let helloWorld = document.createElement("div");

// Le personnaliser
helloWorld.textContent = "Hello World !";

// Ajouter un élément à notre page après les autres éléments

// document.body.append(helloWorld);

// Cette fonction prend obligatoirement un objet mais pas très utilisée et sinon mieux vaut utuliser append
// document.body.appendChild(helloWorld);

// Ajouter un élément juste avant un autre 
//document.body.insertBefore(helloWorld, document.querySelector(".container"));

// Idem que le précédent mais plus clair/propre
document.querySelector(".container").prepend(helloWorld);

// Supprimer un élément
// h1 = document.querySelector("h1");
// h1.remove();

// Même résultat précédent
document.querySelector("h1").remove();

// let element = document.createElement('div').textContent("Le texte de la div");


// ************************************************************** MODIFIER LE DOM ***************************************************************

// 1ère méthode : décomposé 
let header = document.querySelector("header");

// header.style.backgroundColor = "#ffbd69";

// 2ème méthode : directe 
document.querySelector("h2").style.color = "blue";

document.querySelector("h2").style.textAlign = "center";


// 3ème méthode : avec une classe
document.querySelector("header").className = "ma_class";

let mesParagraphes = document.querySelectorAll('p');
mesParagraphes.style = 'green';