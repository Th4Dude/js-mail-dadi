'use strict'

/* chiedo email utente */

const emailUtente = prompt('Digita la tua email')
console.log(emailUtente)

/* chiedo email utente */

/* arry */

const gruppoEmail = ["ciao","boolean@saigia.it", "andiamoavanti@celapossofare.it","eccomiqua@si.it", "questa@eralultima.it" ]
/* console.log(gruppoEmail) */

/* arry */

let emailGiusta = false;

for( let i = 0; i <= gruppoEmail.length; i++ ){
    
    if(gruppoEmail[i] === emailUtente ){
        emailGiusta = true;
    }
}

if (emailGiusta) {

    /* Utente autorizzato */

    console.log("Enjoy it, " + emailUtente); 
    document.getElementById('email_giusta').innerHTML = ("Enjoy it, " + emailUtente);
    
  } else {

    /* Utente non autorizzato */

    console.log("non puoi entrare " + emailUtente + ".only VIP.");
    document.getElementById('email_giusta').innerHTML = ("non puoi entrare " + emailUtente + ".only VIP.");
  }
  