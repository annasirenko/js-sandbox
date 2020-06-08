// let name = prompt("what's your name?");
// console.log("Hello " + name);

// let cats = confirm("do u like cats?");
// if (cats) {
//   console.log("yeah");
// } else {
//   console.log("no");
// }

"Виселица";

let words = ["javascript", "monkey", "amazing", "pancake"];
let word = words[Math.floor(Math.random() * words.length)];
//Устанавливаем массив ответов
let answerArray = [];
for (let i = 0; i < word.length; i++) {
  answerArray[i] = "_";
}
let remainingLetters = word.length;
let guesses = 3;
//Игровой цикл
while (remainingLetters > 0 && guesses > 0) {
  //показываем игроку его прогресс
  alert(answerArray.join(" "));
  //получаем варианты ответов от игрока
  let guess = prompt(
    "Guess a letter, or click Cancel to stop playing (attempts left: " +
      guesses +
      ")"
  );

  if (guess === null) {
    //выходим из игрового процесса

    break;
  } else if (guess.length !== 1) {
    alert("enter a single letter");
  } else {
    guess = guess.toLowerCase();
    let isGuessed = false;

    if (!answerArray.includes(guess)) {
      //обновляем состояние игры со помощью изменяемого параметра guess
      for (let j = 0; j < word.length; j++) {
        if (word[j] === guess) {
          isGuessed = true;
          answerArray[j] = guess;
          remainingLetters--;
        }
      }
    }

    if (!isGuessed) {
      guesses--;
    }
  }
}
//показываем ответ
alert(answerArray.join(" "));
if (remainingLetters === 0) {
  alert("good " + word);
} else {
  alert("bad " + word);
}
