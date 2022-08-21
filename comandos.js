function startGame (){
    let numCards = 10 //prompt("Com quantas cartas você gostaria de jogar? (favor escolher um número entre 4 e 14)")
 while (numCards%2 || numCards < 4 || numCards > 14){
    numCards = prompt("Com quantas cartas você gostaria de jogar? (Por favor, escolha um número entre 4 e 14)");
 }

   const cards = [];
   for (let index = 0; index < numCards; index++) {
      cards.push(
         `<div class="card card${index}">
               <img class="front-side hidden" src="image/front.png"/>
               <img class="turned-side not-hidden"  src="image/carta${(index+1)}.gif"/>                
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

 console.log(divContainerCards);
}

startGame();
