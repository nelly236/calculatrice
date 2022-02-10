// fonction calculatrice

let nbConvert1;
let nbConvert2;
let nb1;
let nb2;


calculatrice();

function verifieNombre(nb1, nb2){
   if(isNaN(nb1) || isNaN(nb2)){
      alert("Veuillez saisir des nombres");
      calculatrice();
   }
}

function demandeNombre(){
   nb1 = prompt("Veuillez saisir le premier nombre de l'opération");
   nb2 = prompt("Veuillez saisir le deuxième nombre de l'opération");
}

function convertirNombre(nb1,nb2){
   nbConvert1 = parseFloat(nb1);
   nbConvert2 = parseFloat(nb2);
}

function addition(nb1, nb2){
   let calcul = nb1+nb2;
   alert(calcul);
}

function soustraction(nb1, nb2){
   let calcul = nb1-nb2;
   alert(calcul);
}

function division(nb1, nb2){
   let calcul = nb1/nb2;
   alert(calcul);
}

function multiplication(nb1, nb2){
   let calcul = nb1*nb2;
   alert(calcul);
}