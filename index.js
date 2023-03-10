let player = {
    name: "Desmond",
    chips: 150
}

let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")
let playerEl = document.querySelector("#player-el")

// actions
let startGame = document.querySelector("#start-game")
let drawNewCard = document.querySelector("#new-card")

let sum = 0

let cards = []

// state of the game
let hasBlackJack = false
let isAlive = false

let message = ""

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
    let randomCard = Math.floor(Math.random() * 13) + 1

    if (randomCard === 1) {
        return 11
    } else if (randomCard > 10) {
        return 10
    } else {
        return randomCard
    }

}

startGame.addEventListener("click", function () {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
})

// function startGame() {
//     isAlive = true

//     let firstCard = getRandomCard()
//     let secondCard = getRandomCard()

//     cards = [firstCard, secondCard]
//     sum = firstCard + secondCard

//     renderGame()
// }

function renderGame() {
    sumEl.textContent = "Sum: " + sum
    cardsEl.textContent = "Cards: "

    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " "
    }

    if(sum <= 20) {
        message = "Do you want to draw another card?"
    } else if (sum === 21) {
        message = "You've won the game!"
        hasBlackJack = true
    } else {
        message = "You're out of the game"
        isAlive = false
    }
    
    messageEl.textContent = message
}

drawNewCard.addEventListener("click", function () {
    if (isAlive === true && hasBlackJack === false) {
        let newCard = getRandomCard()
        sum += newCard
        cards.push(newCard)
        renderGame()
    }
})

// function newCard() {
//     // draw new card only when the player is alive and does not have blackjack
//     if (isAlive === true && hasBlackJack === false) {
//         let newCard = getRandomCard()
//         sum += newCard
//         cards.push(newCard)
//         renderGame()
//     }
// }

