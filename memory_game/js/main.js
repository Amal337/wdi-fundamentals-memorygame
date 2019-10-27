var cards = ["queen", "queen", "king", "king"];
var cardsInPlay = [];

function checkForMatch() {
  if (cardsInPlay[0] === cardsInPlay[1]) {
     console.log("You Found A Match!");
  }  else {
     console.log("Sorry, Try Again.");
    }

function flipCard(cardId) {

    cardsInPlay.push(cards[cardId]);

  if(cardsInPlay.length === 2) {
     checkForMatch();
}
     console.log("User flipped " + cards[cardId]);
}


flipCard(0);
flipCard(2);
