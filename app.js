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
//calculatrice


function calculatrice(){
    let operation = prompt("Bienvenue dans la super calculatrice\n\nVeuillez choisir une option :\n1) Tapez 1 pour réaliser une addition\n2) Tapez 2 pour réaliser une soustraction\n3) Tapez 3 pour réaliser une division\n4) Tapez 4 pour réaliser une multiplication");
     
       if(operation == "1"){
       demandeNombre();
       verifieNombre(nb1, nb2);
       convertirNombre(nb1,nb2);
       addition (nbConvert1, nbConvert2);
       }
       else if (operation == "2" ){
       demandeNombre();
       verifieNombre(nb1, nb2);
       convertirNombre(nb1,nb2);
       soustraction(nbConvert1, nbConvert2);
       }
       else if (operation == "3"){
       demandeNombre();
       verifieNombre(nb1, nb2);
       convertirNombre(nb1,nb2);
       division(nbConvert1, nbConvert2);
       }
       else if (operation == "4"){
       demandeNombre();
       verifieNombre(nb1, nb2);
       convertirNombre(nb1,nb2);
       multiplication(nbConvert1, nbConvert2);
       }
       else{
          if(alert("Veuillez saisir une opération valide. Appuyer sur 'OK' pour recommencer ou 'Annuler' pour quitter")){
             calculatrice();
          }
       } 
    }