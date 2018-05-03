Main = {};
Main.wordArray = [];
Main.wordUarray = [];

Main.Lives = 10;
Main.NumInWordBank = Word.length;

Main.Word = "Avengers";
Main.WordU = " ";

// Functions start here

Main.PullWord = function () {
    Main.Word = Word.List[(Math.floor(Math.random() * Main.NumInWordBank))];
}

Main.SetUnderLine = function () {
    Main.PullWord ();
    for (i = 0; i < Main.Words.length; i++) {
        Main.wordArray[i] = Main.Word.charAt(i);
        Main.wordUarray[i] = "_";
    }
    Main.WordU = Main.wordUarray.join("");
    document.getElementById("word").innerHTML = Main.WordU;
    document.getElementById("numLetters").innerHTML = Main.Word.length;
}

Main.UpdateLetter = function(letter) {
    Main.Changes = 0;
    for (i = 0; i < Main.Word.length; i++) {
        Main.wordArray[i] = Main.Word.charAt(i);
        if (Main.Word.charAt(i) === letter) {
            Main.wordUarray[i] = letter;
            Main.Changes += 1;
        }
    }
    if (Main.Changes < 1) {
        Main.Lives -= 1;
        document.getElementById("lives").innerHTML = Main.Lives;
    }
    Main.WordU = Main.wordUarray.join("");
    document.getElementById("word").innerHTML = Main.WordU;

    Main.Word1 = Main.wordArray.join("");
    Main.Word2 = Main.wordUarray.join("");

    if (Main.Word1 === Main.Word2) {
        alert("You Won! Loading a new word...");
        window.location.reload();
    }
    if (Main.Lives < 1) {
        document.getElementById("word").innerHTML = Main.Word1;
        alert("You have run out of opportunities! Loser ...")
        window.location.reload();
    }
}

Main.PullWord();
Main.SetUnderLine();
