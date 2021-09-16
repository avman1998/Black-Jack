let name = prompt("Enter Your Name");

let result_El = document.getElementById("result");
let card_El = document.getElementById("card");
let sum_El = document.getElementById("sum");
let player_El = document.getElementById("player");

let cards = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

player_El.textContent = "Player : " + name;

function startGame() {
  let first_card = getRandomCard();
  let second_card = getRandomCard();
  cards = [first_card, second_card];
  sum = first_card + second_card;
  isAlive = true;
  renderGame();
}

function getRandomCard() {
  let randomCard = Math.floor(Math.random() * 10) + 2;
  return randomCard;
}
function renderGame() {
  sum_El.textContent = "Sum: " + sum;
  card_El.textContent = "Cards: ";
  for (let i = 0; i < cards.length; i++) {
    card_El.textContent += cards[i] + " ";
  }
  //   card_El.textContent = "Cards: " + cards[0] + " " + cards[1];
  if (sum <= 20) {
    message = "Do you want to draw new card?";
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasBlackJack = true;
  } else {
    message = "You are out of the game!";
    isAlive = false;
  }
  result_El.textContent = message;
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard();
    cards.push(newCard);
    sum += newCard;

    renderGame();
  }
}
console.log(message);
