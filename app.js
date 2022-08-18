const playerName = document.getElementById("player-name");
const playerDisplay = document.getElementById("player-display");
const dealerName = document.getElementById("dealer-name");
const dealerDisplay = document.getElementById("dealer-display");
const startGame = document.getElementById("start-game");
const cardHit = document.getElementById("card-hit");
const cardStand = document.getElementById("card-stand");
const message = document.getElementById("message");

// prettier-ignore
let cardArray = [
  { name: `Ace`, suit: `D`, count: 11, image: "/images/cards/ace_of_diamonds.svg" },
  { name: `2`, suit: `D`, count: 2, image: "/images/cards/2_of_diamonds.svg" },
  { name: `3`, suit: `D`, count: 3, image: "/images/cards/3_of_diamonds.svg" },
  { name: `4`, suit: `D`, count: 4, image: "/images/cards/4_of_diamonds.svg" },
  { name: `5`, suit: `D`, count: 5, image: "/images/cards/5_of_diamonds.svg" },
  { name: `6`, suit: `D`, count: 6, image: "/images/cards/6_of_diamonds.svg" },
  { name: `7`, suit: `D`, count: 7, image: "/images/cards/7_of_diamonds.svg" },
  { name: `8`, suit: `D`, count: 8, image: "/images/cards/8_of_diamonds.svg" },
  { name: `9`, suit: `D`, count: 9, image: "/images/cards/9_of_diamonds.svg" },
  { name: `10`, suit: `D`, count: 10, image: "/images/cards/10_of_diamonds.svg" },
  { name: `Jack`, suit: `D`, count: 10, image: "/images/cards/jack_of_diamonds.svg" },
  { name: `Queen`, suit: `D`, count: 10, image: "/images/cards/queen_of_diamonds.svg" },
  { name: `King`, suit: `D`, count: 10, image: "/images/cards/king_of_diamonds.svg" },
  { name: `Ace`, suit: `C`, count: 11, image: "/images/cards/ace_of_diamonds.svg" },
  { name: `2`, suit: `C`, count: 2, image: "/images/cards/2_of_clubs.svg" },
  { name: `3`, suit: `C`, count: 3, image: "/images/cards/3_of_clubs.svg" },
  { name: `4`, suit: `C`, count: 4, image: "/images/cards/4_of_clubs.svg" },
  { name: `5`, suit: `C`, count: 5, image: "/images/cards/5_of_clubs.svg" },
  { name: `6`, suit: `C`, count: 6, image: "/images/cards/6_of_clubs.svg" },
  { name: `7`, suit: `C`, count: 7, image: "/images/cards/7_of_clubs.svg" },
  { name: `8`, suit: `C`, count: 8, image: "/images/cards/8_of_clubs.svg" },
  { name: `9`, suit: `C`, count: 9, image: "/images/cards/9_of_clubs.svg" },
  { name: `10`, suit: `C`, count: 10, image: "/images/cards/10_of_clubs.svg" },
  { name: `Jack`, suit: `C`, count: 10, image: "/images/cards/jack_of_clubs.svg" },
  { name: `Queen`, suit: `C`, count: 10, image: "/images/cards/queen_of_clubs.svg" },
  { name: `King`, suit: `C`, count: 10, image: "/images/cards/king_of_clubs.svg" },
  { name: `Ace`, suit: `H`, count: 11, image: "/images/cards/ace_of_hearts.svg" },
  { name: `2`, suit: `H`, count: 2, image: "/images/cards/2_of_hearts.svg" },
  { name: `3`, suit: `H`, count: 3, image: "/images/cards/3_of_hearts.svg" },
  { name: `4`, suit: `H`, count: 4, image: "/images/cards/4_of_hearts.svg" },
  { name: `5`, suit: `H`, count: 5, image: "/images/cards/5_of_hearts.svg" },
  { name: `6`, suit: `H`, count: 6, image: "/images/cards/6_of_hearts.svg" },
  { name: `7`, suit: `H`, count: 7, image: "/images/cards/7_of_hearts.svg" },
  { name: `8`, suit: `H`, count: 8, image: "/images/cards/8_of_hearts.svg" },
  { name: `9`, suit: `H`, count: 9, image: "/images/cards/9_of_hearts.svg" },
  { name: `10`, suit: `H`, count: 10, image: "/images/cards/10_of_hearts.svg" },
  { name: `Jack`, suit: `H`, count: 10, image: "/images/cards/jack_of_hearts.svg" },
  { name: `Queen`, suit: `H`, count: 10, image: "/images/cards/queen_of_hearts.svg" },
  { name: `King`, suit: `H`, count: 10, image: "/images/cards/king_of_hearts.svg" },
  { name: `Ace`, suit: `S`, count: 11, image: "/images/cards/ace_of_spades.svg" },
  { name: `2`, suit: `S`, count: 2, image: "/images/cards/2_of_spades.svg" },
  { name: `3`, suit: `S`, count: 3, image: "/images/cards/3_of_spades.svg" },
  { name: `4`, suit: `S`, count: 4, image: "/images/cards/4_of_spades.svg" },
  { name: `5`, suit: `S`, count: 5, image: "/images/cards/5_of_spades.svg" },
  { name: `6`, suit: `S`, count: 6, image: "/images/cards/6_of_spades.svg" },
  { name: `7`, suit: `S`, count: 7, image: "/images/cards/7_of_spades.svg" },
  { name: `8`, suit: `S`, count: 8, image: "/images/cards/8_of_spades.svg" },
  { name: `9`, suit: `S`, count: 9, image: "/images/cards/9_of_spades.svg" },
  { name: `10`, suit: `S`, count: 10, image: "/images/cards/10_of_spades.svg" },
  { name: `Jack`, suit: `S`, count: 10, image: "/images/cards/jack_of_spades.svg" },
  { name: `Queen`, suit: `S`, count: 10, image: "/images/cards/queen_of_spades.svg" },
  { name: `King`, suit: `S`, count: 10, image: "/images/cards/king_of_spades.svg" },
];

let playerCards = [];
let dealerCards = [];
let playerCount = 0;
let dealerCount = 0;
let chipCount = 0;
const hasBlackJack = false;
const gameStarted = false;

startGame.addEventListener("click", function () {
  render();
});

cardHit.addEventListener("click", function () {
  getCard();
  playerDisplay.innerHTML = ``;
  playerCount = 0;
  showCards();
  playerName.textContent = `Player: ${playerCount}`;
  displayMessage();
  console.log(playerCards);
  console.log(playerCount);
});
cardStand.addEventListener("click", function () {
  renderStand();
});

function cardDealer() {
  let randomCard = Math.floor(Math.random(1) * cardArray.length);
  dealerCards.push(cardArray[randomCard]);
  cardArray.splice(randomCard, 1);
  console.log(dealerCards);
  dealerDisplay.innerHTML = `<img src="${dealerCards[0].image}" alt="" class="card-image"> <img src="/images/cards/red.svg" alt="" class="card-image">`;
  dealerCount = dealerCards[0].count;
  dealerName.textContent = `Dealer: ${dealerCount}`;
}

function showCards() {
  for (let i = 0; i < playerCards.length; i++) {
    playerDisplay.innerHTML += `<img src="${playerCards[i].image}" alt="" class="card-image">`;
    playerCount += playerCards[i].count;
    playerName.textContent = `Player: ${playerCount}`;
  }
}

function getCard() {
  let randomCard = Math.floor(Math.random(1) * cardArray.length);
  let cardName = cardArray[randomCard].count;
  if (playerCount > 21) {
    console.log("BUSTED");
    cardHit.disabled = "true";
  } else if (playerCount > 11 && cardArray[randomCard].name === "Ace") {
    cardArray[randomCard].count = 1;
    playerCards.push(cardArray[randomCard]);
    cardArray.splice(randomCard, 1);
  } else {
    playerCards.push(cardArray[randomCard]);
    cardArray.splice(randomCard, 1);
  }
}

function render() {
  reset();
  getCard();
  getCard();
  showCards();
  cardDealer();
  console.log(playerCount);
  console.log(playerCards);
}

function reset() {
  playerCards = [];
  dealerCards = [];
  playerCount = 0;
  dealerCount = 0;
  chipCount = 0;
  playerDisplay.innerHTML = ``;
  dealerDisplay.innerHTML = ``;
  console.clear();
}

function displayMessage() {
  if (playerCount > 21) {
    message.innerHTML += `BUSTED`;
  }
}

function renderStand() {
  getDealerCard();
  dealerDisplay.innerHTML = `<img src="${dealerCards[0].image}" alt="" class="card-image"> <img src="${dealerCards[1].image}" alt="" class="card-image">`;
  dealerCount += dealerCards[1].count;
  dealerName.textContent = `Dealer: ${dealerCount}`;
}

function dealerValidation() {
  if (dealerCount >= 16) {
    if (playerCount === dealerCount) {
      message.innerHTML += `PUSH`;
    }
  } else if (dealerCount < 16) {
  }
}

function getDealerCard() {
  let randomCard = Math.floor(Math.random(1) * cardArray.length);
  dealerCards.push(cardArray[randomCard]);
  cardArray.splice(randomCard, 1);
}
