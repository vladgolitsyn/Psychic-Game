// set-up variables and zero counter start
var won = 0;
var lost = 0;
var attempts = 10;
var usedArray = [];
var randomLetter = randomLetter;
var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];


// computer-generated random letter using predefined Math function
randomLetter = letters[Math.floor(Math.random() * letters.length)];
console.log(randomLetter);

//Uses random whole number generated above to select a random letter from the array [letters] and assigns it to the var ranLetter
function jsGuess() {
    randomLetter = letters[Math.floor(Math.random() * letters.length)];
      console.log(randomLetter);

}

// user input logic
document.onkeyup = function (event) {
      var playerGuess = event.key;

      //test if players guess equals ranLetter, if true it increments wins by 1, and clears used letters array. Supposed to reset guess # to 10 but starts at 9 instead, 
      if (playerGuess === randomLetter) {
            won++;
            attempts = 10;
            usedArray = [];

      }

      //tests if players guess Does Not Equal randomLetter and decriments attempts by 1
      jsGuess();
      if (playerGuess !== randomLetter) {
            attempts--;

      }

      //when remaining attempts equals zero, lost is incrimented by 1; attempts is reset to 10, and used letters array is cleared
      if (attempts == 0) {
            lost++;
            usedArray = []
            attempts = 10;
      }

      //this 'if' prevents a letter selected a 2nd time from being written to the usedArray again, although it still counts as a guess
      if (usedArray.indexOf(playerGuess) >= 0) {

      } else {
            //this pushes the players incorrect guess to the usedArray and writes it to the HTML
            usedArray.push(playerGuess);
            document.getElementById('playerGuess').innerHTML = usedArray;
            console.log(usedArray);

      }

      // write output to html
      document.getElementById('playerWon').innerHTML = won;
      document.getElementById('playerLost').innerHTML = lost;
      document.getElementById('playerAttempts').innerHTML = attempts;

}