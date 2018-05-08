// instructions button alert & play theme song´s

function myFunction() {
    alert("Welcome, mighty Thanos! The Avengers have assembled to protect the Infinity Stones. We must defeat them so you can wield the infinity gauntlet.")
    alert("You have 1 life per hero-24 lives- and each time you get a word wrong you´ll lose a life.")
    alert("You have to guess 12 words and you can take hints with the hint´s button. But be careful, they come with a price")
    confirm("Enter your words with the keyboard. Are you ready?")

var avengersTheme = document.createElement("audio");
avengersTheme.setAttribute("src", "assets/images/avengers-iw-theme4.mp3")
avengersTheme.loop = true;
avengersTheme.setAttribute("autoplay", "autoplay");
}

// Global variables

// var category = ["eye-of-agamoto", "lokis-scepter", "aether", "orb", "gamoras-soul", "tesseract"];
var wordBank = ["timestone", "mindstone", "realitystone", "powerstone", "soulstone", "spacestone"];
var wins = 0;
var loss = 0;
var wrongLetter = [];
var guessesLeft = 24;
var underScores = [];
var userGuesses = [];
var randomWord;
// var randomCat

// Functions

function startGame () {
    /* picks random category
    randomCat = category[Math.floor(Math.random() * category.length)];
    document.querySelector("#category").innerHTML = randomCat; */

    // and random misteryword
    randomWord = wordBank[Math.floor(Math.random() * wordBank.length)];
    console.log("random word = " + randomWord)
    for (var i = 0; i < randomWord.length; i++){
        underScores.push("_");
    }
    // prints underscore to the screen
    document.querySelector("#hold").innerHTML = underScores.join(" ");

    // reset
    wrongLetter = [];
    guessesLeft = 24;

    // print on HTML
    document.getElementById("lives").innerHTML = guessesLeft;

}

function winLose () {
    if (wins === randomWord.length) {
        alert("You assembled an infinity stone!");
    } else if (guessesLeft === 0) {
        alert("The avengers defeated you...");
    }
}

// Capture users input
document.onkeyup = function(event) {
    userGuesses = event.key;

// checking if the letter exists inside of the word
    if (randomWord.indexOf(userGuesses) > -1) {
        for (var i = 0; i < randomWord.length; i++){

          // replace underscore for user input  
            if (randomWord[i] === userGuesses) {
                underScores[i] = userGuesses;
                console.log(underScores);
                wins++;
                winLose();
            }
        }
    } else {
        wrongLetter.push(userGuesses);
        guessesLeft--;
        console.log(wrongLetter);
        winLose();
    }
}

// Main

startGame();


/*
categories = [
          ["eye-of-agamoto", "lokis-scepter", "aether", "orb", "gamoras-soul", "tesseract"],
          ["time-stone", "mind-stone", "reality-stone", "power-stone", "soul-stone", "space-stone"],
      ];

hints = [
          ["This artifact is wielded and protected by one of the Avengers",
          "The artifact containing this Stone was on a containment unit used by Loki", 
          "A red matter used by the Dark Elves to transform our universe back into one of eternal night.",
          "Star Lord and the Guardians of the Galaxy fought for a powerful artifact", 
          "This stone is obtained by sacrificing a Soul. Who was sacrificed?",   
          "This cube wasused in the World war too by RedSkull and his army against Captain America"],
          ["It enables you to travel in time and realities", 
          "Lokis Scepter contains an infinity stone that gave life to Vision", 
          "The Aether contains an infinity stone that can shape the perception arounds us", 
          "The orb was used to contain an infinity stone that was capable of great destruction", 
          "This stone is obtained by sacrificing a Soul. Which one is it?",
          "The Tesseract is an artifact that is used to travel, which infinity stone is it?"
        ]      
*/

/* 
// array of questions

var questions = [
    { q: "This artifact is wielded and protected by one of the Avengers", a: "eyeofagamotto"},
    { q: "The Eye of Agamotto is which infinity stone?", a: "time" },
    { q: "This stone is obtained by sacrificing a Soul. Which one is it?", a: "soulstone" },
    { q: "The artifact containing this Stone was on a containment unit used by Loki", a: "scepter" },
    { q: "Lokis Scepter contains an infinity stone that gave life to Vision", a: "mind" },
    { q: "A red matter used by the Dark Elves to transform our universe back into one of eternal night.", a: "aether" },
    { q: "The Aether contains an infinity stone that can shape the perception arounds us", a: "reality" },
    { q: "Star Lord and the Guardians of the Galaxy fought for a powerful artifact", a: "orb" },
    { q: "The orb was used to contain an infinity stone that was capable of great destruction", a: "power" },
    { q: "The Tesseract is an artifact that is used to travel, which infinity stone is it?", a: "space" },
];

// The number of letters to be displayed

var numberLetters = document.getElementById("#numLetters");

// Variable to hold the index of current question.

var questionIndex = 0;

// Function to render questions

function renderQuestion () {
// If there are still more questions, render the next one
if (questionIndex <= (questions.length - 1)) {
    document.querySelector("#question").innerHTML = questions[questionIndex].q;
} // If there aren't, render the end game screen.
else {
  document.querySelector("#question").innerHTML = "You win, Thanos. You have assembled the infinity stones...";
}
}

// calling functions
renderQuestion();

// When the user presses a key, it will run the following function...
document.onkeyup = function(event) {
    // If there are no more questions, stop the function.
    if (questionIndex === questions.length) {
        return;
      }

    // Determine which key was pressed and make it lowercase
    var userInput = event.key.toLowerCase();

    // Only run this code if the correct set of words where pressed.



    // Increment the questionIndex variable and call the renderQuestion function.
    questionIndex++;
    renderQuestion();
}
*/