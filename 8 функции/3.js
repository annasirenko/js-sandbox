let pickWord = function () {
  let words = ["javascript", "monkey", "amazing", "pancake"];
  let word = words[Math.floor(Math.random() * words.length)];
  return word;
};

let setupAnswerArray = function (word) {
  let answerArray = [];
  for (let i = 0; i < word.length; i++) {
    answerArray[i] = "_";
  }
  return answerArray;
};

let showPlayerProgress = function (answerArray) {
  alert(answerArray.join(" "));
};

let getGuess = function () {
  return prompt("Guess a letter, or click Cancel to stop playing");
};

let updateGameState = function (guess, word, answerArray) {
  guess = guess.toLowerCase();
  let isGuessed = false;
  let lettersInWord = 0;

  if (!answerArray.includes(guess)) {
    //обновляем состояние игры со помощью изменяемого параметра guess
    for (let j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        isGuessed = true;
        answerArray[j] = guess;
        lettersInWord++;
      }
    }
  }
  return lettersInWord;
};

let showAnswerAndCongratulatePlayer = function (answerArray) {
  alert("Good " + word);
};
// word: загаданное слово
var word = pickWord();
// answerArray: итоговый массив
var answerArray = setupAnswerArray(word);
// remainingLetters: сколько букв осталось угадать
var remainingLetters = word.length;

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  // guess: ответ игрока
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Пожалуйста, введите одиночную букву.");
  } else {
    // correctGuesses: количество открытых букв
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  }
}

showAnswerAndCongratulatePlayer(answerArray);
