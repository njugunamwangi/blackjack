let messageEl = document.querySelector("#message-el")
let sumEl = document.querySelector("#sum-el")
let cardsEl = document.querySelector("#cards-el")

let sum = 0

let cards = []

let hasBlackJack = false
let isAlive = false

let message = ""

console.log(cards);

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

function startGame() {
    isAlive = true

    let firstCard = getRandomCard()
    let secondCard = getRandomCard()

    cards = [firstCard, secondCard]
    sum = firstCard + secondCard

    renderGame()
}

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

function newCard() {
    let newCard = getRandomCard()
    sum += newCard
    cards.push(newCard)
    renderGame()
}

