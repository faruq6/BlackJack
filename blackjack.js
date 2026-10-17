//Card Ace , A =, Card K = 9, if cards sum is exactly=21, wins, if less, can ask for another card, else out.
//console.log("Debug 1: js file started")
firstCard = 10;
secondCard = 5;

let sum = firstCard + secondCard;
console.log(sum);
console.log("Check1: initial sum:", sum);

let hasBlackjack = false;
let isAlive = true;
let message = "";
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
//console.log(sumEl)
let cardsEl = document.getElementById("cards-el");
let newCardEl = document.getElementById("newCard-el");
//console.log(newCardEl)

function renderGame() {
  startGame();
}
function startGame() {
  if (sum < 21) {
    message = "Do you want another Card?";
  } else if (sum === 21) {
    message = "You've have a Blackjack!";
    hasBlackjack = true;
  } else {
    message = "you are out of the game!";
    isAlive = false;
  }
  cardsEl.textContent = "Cards: " + cards 
  sumEl.textContent = "Sum: " + sum;
  messageEl.textContent = message;
}
function newCard() {
  //console.log("newCard button clicked")

  let j = Math.floor(Math.random() * 13) + 1;
  console.log(j);
  if (j === 1) {
    return 11;
  } else if (j > 10) {
    return 10;
  } else return j;
}

//newCardEl.addEventListener("click", newCard);

//let newCard1 = newCard();
let cards = [firstCard, secondCard];

newCardEl.addEventListener("click", function() {
    
    if(isAlive=== false) {
        return;
    }
    if(hasBlackjack === true) {
        return;
    }
    let card = newCard();
    cards.push(card);
    sum = 0;

for (let i = 0; i < cards.length; i++) {
  sum += cards[i];
}

cardsEl.textContent = "Cards: " + cards;
sumEl.textContent = "Sum: " + sum;

console.log("Cards: ",cards);
console.log(sum);
startGame();

});

//cards.push(newCard1);
console.log("Cards: ",cards);
//console.log("Check2: cards array =", cards);
//console.log("Check3: sum before iteration = ", sum);
console.log(sum);
renderGame();
