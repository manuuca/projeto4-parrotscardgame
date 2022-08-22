function startGame (){
    let numCards = 4 //prompt("Com quantas cartas você gostaria de jogar? (favor escolher um número entre 4 e 14)")
 while (numCards%2 || numCards < 4 || numCards > 14){
    numCards = prompt("Com quantas cartas você gostaria de jogar? (Por favor, escolha um número entre 4 e 14)");
 }


   const cards = [];
   for (let index = 0; index < numCards; index++) {
      cards.push(        
         `<div class="card card${index}" onclick="flip(this)">
               <img class="front-side not-hidden" src="image/front.png"/>
               <img class="turned-side hidden"  src="image/carta${(index+1)}.gif"/>                
         </div>`
      )
      
   } 
   
   
   cards.sort(comparador)

   function comparador() { 
      return Math.random() - 0.5; 
   }

 const divContainerCards = document.querySelector(".container-cards")
   for (let i = 0; i < numCards ; i++){
   divContainerCards.innerHTML += `${cards[i]}`;
   }

}

startGame();

function flip(){
   alert("periquito maldito");
   const carta = document.querySelector(".card");
   const par = document.querySelector(".front-side");

   par.classList.toggle(".hidden");
   carta.classList.toggle(".not-hidden");
}

