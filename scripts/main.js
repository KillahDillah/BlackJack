/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/


/* 
Assumptions are that I know I will have an array of characters that represent cards in the "hand" parameter
set a new variable called total or handValue to 0
loop over an array of cards
	
	if the card is a face card, add 10 to its total
	else if the card is an A AND (total +11) < 22 then add 11 to total
		else if the card is an A, add 1 to total
	else the card is a # card, add its value to total

if total is greater than 21 and there is an A in the hand, subtract 10 from total
return total

*/
let hand = []

function handValue (hand) {
	let sum = 0
	for (let i=0;i<hand.length; i++){
	// can include another "let" statement to avoid typing "hand[i]"
	// let card = hand[i]  -> replace hand[i] with card
		if (hand[i] === "K" || hand[i] === "Q" || hand[i] === "J"){
			sum+=10
		}
		else if (hand[i] === "A"){
			if (sum + 11 > 22){
				sum+=1
			}
			if (sum + 11 < 22){
				sum+=11
			}
		}
		else {
			sum+= parseInt (hand[i])
		}
	}
  if (sum > 21 && hand.indexOf('A') >=0){
  	sum-=10
  }
  return sum
}


/*----------------------------------------------------------------

.reduce method



function addCardValue (total,card) {
	if (card === "K" || card === "Q" || card === "J"){
		return total +10;
	}
	else if (card === "A") {
		return total+11;
	}
	else {
		return total + parseInt(card)
	}
}

function countAces(total,card) {
	if (card === 'A') {
		return total + 1;
	}
	else {
		return total;
	}
}

function handValueReduce (hand) {

	let total = hand.reduce(addCardValue, 0);

	let aceCount = hand.reduce(countAces, 0);

	while (total > 21 && aceCount > 0) {
		total = total - 10;
		aceCount = aceCount-1;
	}
  }

	return total;
}



/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/