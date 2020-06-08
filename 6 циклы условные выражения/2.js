var alphabet = "абвгдеёжзиклмнопрстуфхцчшщъыьэюя";
var randomString = "";
var stringLength = 6;

while (randomString.length < stringLength) {
  randomString += alphabet[Math.floor(Math.random() * alphabet.length)];
}

console.log(randomString);
