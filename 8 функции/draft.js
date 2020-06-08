//1
let sayHelloTo = function (name) {
  console.log("Say hello to " + name);
};
sayHelloTo("Nick");

//2
let drawCats = function (howManyTimes) {
  for (i = 0; i < howManyTimes; i++) {
    console.log(i + "^__^");
  }
};
drawCats(3);

//3
let printMultipleTimes = function (howManyTimes, whatToDraw) {
  for (i = 0; i < howManyTimes; i++) {
    console.log(i + " " + whatToDraw);
  }
};
printMultipleTimes(3, "^__^");

//4
let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
let randomWords = ["Planet", "Cucumber", "Kek"];
pickRandomWord(randomWords);

//5
let pickRandomWord = function (words) {
  return words[Math.floor(Math.random() * words.length)];
};
let randomBodyParts = ["глаз", "нос", "череп"];
let randomAdjectives = ["вонючий", "унылый", "дурацкий"];
let randomAnimals = ["жабы", "выдры", "коровы", "мартышки", "крысы"];
let randomString =
  "Your " +
  pickRandomWord(randomBodyParts) +
  " " +
  pickRandomWord(randomAdjectives) +
  " " +
  pickRandomWord(randomAnimals);
randomString;

//6
generateRandomInsult = function () {
  let randomBodyParts = ["глаз", "нос", "череп"];
  let randomAdjectives = ["вонючий", "унылый", "дурацкий"];
  let randomAnimals = ["жабы", "выдры", "коровы", "мартышки", "крысы"];
  let randomString =
    "Your " +
    pickRandomWord(randomBodyParts) +
    " " +
    pickRandomWord(randomAdjectives) +
    " " +
    pickRandomWord(randomAnimals);
  return randomString;
};
generateRandomInsult();
