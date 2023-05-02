# Dice-Game
This is a simple yet effective Dice Game Website.

How it works -
  1) The user has to refresh the page for  the 2 dices to roll.
  2) The dices are rolled and the one with bigger value on the face wins.

Inside Working -
  1) When user hits the refresh button, the page reloads and the javascript is activated.
  2) Each time the javascript is called, two random numbers are generated using the 'Math.random()' function.
  3) Depending on the numbers generated, the dice images are changes dynamically using the 'document.quertSelector(<CSS selector>).setAtrribute(<name>,<value>)' method;
  4) Also, 'if-else' loop is used to determine which number is greater and hence which player wins.
