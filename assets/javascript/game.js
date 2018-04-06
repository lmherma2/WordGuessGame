     var random = Math.floor(Math.random() * 10);
     var arrayOfWords = ["copper", "explain", "fated","truck", "neat","unite","branch", "educated",
      "tenuous", "decisive"];
     var Word = arrayOfWords[random];
     var numberOfGuesses = 15; 
     var numberOfLettersLeft = Word.length;
     var wins = 0;
     var Word2 = WordTo_(Word);
     var GuessedLetter = Word.split("");
     var guessedWord = [];


     document.onkeypress = function(e){
      document.getElementById("p2").innerHTML = Word2;
      document.getElementById("p4").innerHTML = guessedWord;
      document.getElementById("p4").innerHTML = guessedWord;
      if(numberOfGuesses===0){
        document.getElementById("h2").innerHTML = "You lose!"
      };
      if(numberOfLettersLeft===0){
        document.getElementById("h2").innerHTML = "You Win!"
      };
      var letter = e.key.toLowerCase(); 

      console.log(letter);
      if (isInWord(letter)){
        console.log("w");
        DisplayLetter(letter);
        CheckWin();
      }
      else
      {
        AddLetterToGuessedLetters(letter);
        console.log("l");;
      };

      document.getElementById("p2").innerHTML = Word2;
      document.getElementById("p4").innerHTML = guessedWord;
      document.getElementById("p6").innerHTML = numberOfGuesses;
      if(numberOfGuesses===0){
        document.getElementById("h2").innerHTML = "You lose!"
      };
      if(numberOfLettersLeft===0){
        document.getElementById("h2").innerHTML = "You Win!"
      };
    };
    function fillWord(){
      guessedWord = Word.split("");
      GuessedLetter = WordTo_(Word);
    };

    function AddLetterToGuessedLetters(letter){
      for(var i = 0; i<guessedWord.length; i ++ ){
        if(letter === guessedWord[i]){
          return;
        };
      };
        numberOfGuesses--;
        guessedWord.push(letter);
    };  


    document.onload = function(){
      fillWord();
      document.getElementById("p2").innerHTML = Word2;
    };

    function WordTo_(t){
      var blankSlate = [];
      for(var i = 0; i < t.length; i ++)
      {
        blankSlate[i] = "_";
      }
      return blankSlate;
    };

    function DisplayLetter(l){
      for(var i = 0; i<(Word2.length); i ++ ){
        if (GuessedLetter[i] === l){
          numberOfLettersLeft--;
          Word2[i] = l;
        };
      };

    };

    function isInWord(t){
      for(var i = 0; i<GuessedLetter.length; i++ ){
        if(t === GuessedLetter[i]){
          return true; 
        };
      };
        return false;
    };

    function newWord(){
      random = Math.floor(Math.random() * 10);
      Word = arrayOfWords[random];
    }

    function CheckWin(){
      for(var i = 0; i<Word.length; i ++ ){
        if (Word[i] === "_"){
          return false;
        };
      };
      return true;
    };

