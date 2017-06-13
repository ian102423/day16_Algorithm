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
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
      case "10":
        total += parseInt(array[i]);
        break;
      case "K":
      case "Q":
      case "J":
        total += 10;
        break;
      case "A":
        array[i] = 1;
        break;
      default:
    }
  }
  if (total < 21) {
    total += 10;
  }
  if (total > 21) {
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
