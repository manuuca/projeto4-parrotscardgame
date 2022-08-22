const main = document.querySelector(".container");
const delay = 100;
const numPair = [1,2,3,4,5,6,7];
let pair, play, numCards, interval;
startGame();

function startGame() {
    [pair, play, time] = [0, 0, 0];
    interval = setInterval(delay);
    
    numCards = prompt("Com quantas cartas você gostaria de jogar? (favor escolher um número entre 4 e 14)");
    while (numCards%2 || numCards < 4 || numCards > 14){
    numCards = prompt("Com quantas cartas você gostaria de jogar? (Por favor, escolha um número entre 4 e 14)");
    } 
    numCards /= 2;
    
    const setting = [];
    numPair.sort(() => Math.random() - 0.5);
    for (let i = 0; i < numCards; i++) setting.push(numPair[i], numPair[i]);
    setting.sort(() => Math.random() - 0.5);

    const item = document.createDocumentFragment();    
    setting.forEach(e => item.appendChild(addCard(e)));
    main.replaceChildren(item);
}

function addCard(i) {
    const card = document.createElement("div");
    const front = document.createElement("div");
    const back = document.createElement("div");
    let img;

    back.classList.add("back", "face");
    img = document.createElement("img");
    img.src = `image/carta${i}.gif`;
    back.appendChild(img);
    front.classList.add("front", "face");
    img = document.createElement("img");
    img.src = "image/front.png";
    front.appendChild(img); 
    
    card.classList.add("card");
    card.id = i.toString();
    card.addEventListener("click", chosenCard);
    card.appendChild(back);
    card.appendChild(front);

    return card;
}

let cards = [];
let wait = false;

function chosenCard() {
    if (wait) return;
    if (this.classList.contains("chosen")) return;

    this.classList.add("chosen");
    cards.push(this);
    
    if (cards.length == 2) resolvePlay();
}

function resolvePlay() {
    const pairEqual = (cards[0].id === cards[1].id);
    play++;

    if (pairEqual) {
        pair++;
        cards.length = 0;
        if (pair == numCards) setTimeout(gameOver, 10);
    } else {
        waitToPlay(1);
    }
}

function gameOver() {
    let replay;
    clearInterval(interval);
    alert(`Você fez ${play*2} jogadas!`);

    while (true) {
        replay = prompt("Gostaria jogar novamente? (\"sim\" ou \"não\")");
        if (replay === "sim") return startGame();
        else if (replay === "não") return;
        else prompt("Gostaria de jogar novamente? (\"sim\" ou \"não\")");
    }
}

function waitToPlay(time) {
    wait = true;
    setTimeout(stopWait, time*1000);
}

function stopWait() {
    wait = false;
    cards.forEach(e => e.classList.remove("chosen"));
    cards.length = 0;
}

function update() {
    time += delay;
}
