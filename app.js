let playerName = document.getElementById("player-name")
let playerDisplay = document.getElementById("player-display")
let dealerName = document.getElementById("dealer-name")
let dealerDisplay = document.getElementById("dealer-display")
const startGame = document.getElementById("start-game")

let cardArray = [
    { name: `Ace`, suit: `D`, count:11},
    { name: `2`, suit: `D`, count:2},
    { name: `3`, suit: `D`, count:3},
    { name: `4`, suit: `D`, count:4},
    { name: `5`, suit: `D`, count:5},
    { name: `6`, suit: `D`, count:6},
    { name: `7`, suit: `D`, count:7},
    { name: `8`, suit: `D`, count:8},
    { name: `9`, suit: `D`, count:9},
    { name: `10`, suit: `D`, count:10},
    { name: `Jack`, suit: `D`, count:10},
    { name: `Queen`, suit: `D`, count:10},
    { name: `King`, suit: `D`, count:10},
]

let playerCards = []
let dealerCards = []
let playerCount = 0
let dealerCount = 0
let chipCount = 0


startGame.addEventListener('click', function(){
    reset()
    getCard()
    getCard()
    showCards()
    console.log(playerCount)
})

function showCards() {
    for (let i = 0; i < playerCards.length; i++) {
        playerDisplay.textContent += `${playerCards[i].name} ${playerCards[i].suit} - `
        playerCount += playerCards[i].count
    }
}

function getCard() {
    let randomCard = Math.floor(Math.random(1) * cardArray.length)
    playerCards.push(cardArray[randomCard])
    cardArray.splice(randomCard,1)
    console.log(cardArray)

}

function reset(){
    playerCards = []
    dealerCards = []
    playerCount = 0
    dealerCount = 0
    chipCount = 0
    playerDisplay.textContent = `Cards: `
    console.clear()
}