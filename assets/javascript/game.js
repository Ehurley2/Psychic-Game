var wins = 0;
var losses = 0;
var guesses = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice, "computerChoice")

var alreadyGuessed = [];

document.onkeypress = function (event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log(userGuess, "userGuess")
    
    alreadyGuessed.push(userGuess);
    console.log(alreadyGuessed);
    document.getElementById("userGuess").innerHTML = "Your guesses so far: " + alreadyGuessed;
    

    if (userGuess === computerChoice) {
        wins++;
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice, "computerChoice");
        alreadyGuessed = [];
    } else {
        guesses--;

    }

    if (guesses === 0) {
        losses++
        computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
        console.log(computerChoice, "computerChoice");
        guesses = 9;
        alreadyGuessed = [];
    }

    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

}
