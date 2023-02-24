'use strict'

let giocatore = Math.floor(Math.random() * 6) + 1;
console.log(giocatore)

let pc = Math.floor(Math.random() * 6) + 1;
console.log(pc)

if(giocatore > pc){
    alert(giocatore + " hai vinto, complimenti");
}else if (pc > giocatore ){
    alert(pc + " il pc ha vinto, riprova");
}else {
    alert("hai pareggiato");
}
