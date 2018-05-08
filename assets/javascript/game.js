// instructions button alert & play theme song´s

function myFunction() {
    alert("Welcome, mighty Thanos! The Avengers have assembled to protect the Infinity Stones. We must defeat them so you can wield the infinity gauntlet.")
    alert("You have 1 life per hero-24 lives- and each time you get a word wrong you´ll lose a life.")
    alert("You have to guess 6 words and you can take hints with the hint´s button. But be careful, they come with a price")
    confirm("Enter your words with the keyboard. Are you ready?")

var avengersTheme = document.createElement("audio");
avengersTheme.setAttribute("src", "assets/images/avengers-iw-theme4.mp3")
avengersTheme.loop = true;
avengersTheme.setAttribute("autoplay", "autoplay");
}

// Global variables
// =======================================================

var category = ["eye-of-agamoto", "lokis-scepter", "aether", "orb", "gamoras-soul", "tesseract"];
var wordBank = ["timestone", "mindstone", "realitystone", "powerstone", "soulstone", "spacestone"];
var hints = ["green, hanging amulet, Dr Strange", 
"yellow, controls people, in Visions head", 
"red, used by Dark Elves, Thor", 
"purple, used against Ronan the Accuser, used by the guardians of the galaxy",
"orange, demands a sacrifice, Gamora", 
"blue, RedSkull used it for weapons, transports you thru space"]
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 24;
var underScores = [];
var userGuesses = [];
var randomWord;
var randomCat;

// Functions
// =======================================================
function startGame () {
    // Picks random misteryword
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("random word = " + randomWord)
    for (var i = 0; i < randomWord.length; i++){
        underScores.push("_");
    }
    // and random category
    randomCat = category[Math.floor(Math.random() * category.length)];
    document.querySelector("#category").innerHTML = randomCat;

    // prints underscore to the screen
    document.querySelector("#hold").innerHTML = underScores.join(" ");

    // print on HTML
    document.getElementById("lives").innerHTML = guessesLeft;
}

function winLose () {
    if (wins === randomWord.length) {
        alert("You assembled an infinity stone!");
        document.getElementById("wins").innerHTML = wins;
    } else if (guessesLeft === 0) {
        alert("The avengers defeated you...");
    }
}

// Hints

function myHints () {
    randHint = hints[Math.floor(Math.random() * hints.length)];
    document.getElementById("clue").innerHTML = randHint;
}

// Next word

function myShuffle () {
    // Picks random misteryword
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("random word = " + randomWord)
    for (var i = 0; i < randomWord.length; i++){
        underScores.push("_");
    }
    // and random category
    randomCat = category[Math.floor(Math.random() * category.length)];
    document.querySelector("#category").innerHTML = randomCat;

    // prints underscore to the screen
    document.querySelector("#hold").innerHTML = underScores.join(" ");

    // print on HTML
    document.getElementById("lives").innerHTML = guessesLeft;
}

function winLose () {
    if (wins === randomWord.length) {
        alert("You assembled an infinity stone!");
        document.getElementById("wins").innerHTML = wins;
    } else if (guessesLeft === 0) {
        alert("The avengers defeated you...");
    }
}

// Capture users input
// =======================================================
document.onkeyup = function(event) {
    userGuesses = event.key;

// checking if the letter exists inside of the word
    if (randomWord.indexOf(userGuesses) > -1) {
        for (var i = 0; i < randomWord.length; i++){

          // replace underscore for user input  
            if (randomWord[i] === userGuesses) {
                underScores[i] = userGuesses;
                document.getElementById("hold").innerHTML = underScores.join(" ");
                console.log(underScores);
                wins++;
                winLose();
            }
        }
    } else {
        wrongLetter.push(userGuesses);
        document.getElementById("lives").innerHTML = guessesLeft - 1;
        guessesLeft--;
        console.log(wrongLetter);
        winLose();
    }
}

// Main
// =======================================================
startGame();
