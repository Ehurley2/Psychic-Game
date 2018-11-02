//Establishes the variables.
var wins = 0;
var losses = 0;
var guesses = 9;
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var computerChoice = alphabet[Math.floor(Math.random() * alphabet.length)];
console.log(computerChoice, "computerChoice")

//This line is our beginning, default empty array. 
var alreadyGuessed = [];

//This section is what turns the user's key press into their guess.
document.onkeypress = function (event) {
    var userGuess = event.key;
    userGuess = userGuess.toLowerCase();
    console.log(userGuess, "userGuess")
    
    //This section adds the guess to the guesses array. 
    alreadyGuessed.push(userGuess);
    console.log(alreadyGuessed);
    document.getElementById("userGuess").innerHTML = "Your guesses so far: " + alreadyGuessed;
    
//This section describes the win/loss scenario. 
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
//This section creates the ids that we can use in our HTML to display the score. 
    document.getElementById('wins').innerHTML = "Wins: " + wins;
    document.getElementById('losses').innerHTML = "losses: " + losses;
    document.getElementById('guesses').innerHTML = "Guesses left: " + guesses;

}
