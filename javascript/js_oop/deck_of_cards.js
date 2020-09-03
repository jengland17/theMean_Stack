// Create a card class 
// Card functiionality should be to have the 4 suits (hearts, clubs, diamonds, spades)
// Each card shold have STRING value (Ace, Two, Three, ... , Queen, King)
// Each card should have a numerical value 1-13
// Each card should have a show method showing its info in the console


class Card {

    constructor(suit, stringVal, numericVal) {
        this.suit = suit;
        this.stringVal = stringVal;
        this.numericVal = numericVal;
    }

    showCards() {
        console.log(`These are the cards ${this.suit} ${this.stringVal}`)
    }
}



// Create deck class
// Deck should have 52 cards
// Deck should shuffle
// Deck should be able to reset
// Deck should be able to deal a random card
    // deal should be return the Card that was dealt and remove it from the deck

    class Deck {

        constructor() {
            this.deck = this.newDeck()
        }
    
        newDeck() {
            var suit = ["Hearts", "Clubs", "Diamonds", "Spades"];
            var stringVal = ["Ace", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King"];
            var numericVal = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

            for (let i = 0; i < suit.length; i++) {
                
            }
        }
        
    
    }





// Create Player class
// player should have a name
// player should have a hand [array of cards from a Deck]
// the player should be able to discard a card