/*
   Implement a Blackjack hand value calculator.

   Open up the `index.html` file and your console
   to watch the assertions pass as you write your code.

   Also remember, that the parameter `hand` will be an array, so
   you'll need to parse through that first before you can start to 
   write your logic.
*/

var hand = ["2", "2", "K", "A"];

function handValue(array) {
  var total = 0;

  for (var i = 0; i < array.length; i++) {
    switch (array[i]) {
      case "K":
      case "Q":
      case "J":
        total += 10;
        break;
      case "A":
        total += 1;
        break;
      default:
        total += parseInt(array[i]);
    }
  }
  if (total < 21) {
    total += 10;
  } else if (total > 21) {
    total -= 10;
  }
  return total;
}

console.log(handValue(hand));
/* -----  Hints ------

1..10   ==> Worth face value (1 = 1, 4 = 4, etc)
K, Q, J ==> Worth 10
A       ==> Worth 1 or 11

*/
