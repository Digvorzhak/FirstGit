const randomLetter = document.querySelector(".unique-letter");
const message = document.querySelector(".message-predict");
const askNewGame = document.querySelector(".ask-new-game");
const gameReset = document.querySelector(".new-game-btn");
const failedLetters = document.querySelector(".fails");
const warnPlayer = document.querySelector(".warning");

let activeGame = true;
let letters = "abcdefghijklmnopqrstuvwxyz".split("");
let letterObj = {};
let counter = 0;

const makeid = () => {
  const characters = "abcdefghijklmnopqrstuvwxyz";
  const charactersLength = characters.length;

  return (randomLetter.innerText = characters.charAt(Math.floor(Math.random() * charactersLength)));
};

console.log(makeid());
console.log(randomLetter.innerHTML);

const randomGuess = (e) => {
  console.log(e.key);
  console.log(randomLetter.innerText);
  if (activeGame) {
    for (let i = 0; i < letters.length; i++) {
      if (letters[i] === e.key) {
        if (e.key === randomLetter.innerHTML) {
          activeGame = false;
          message.innerText = `Right letter! ${randomLetter.innerHTML}`;
          message.classList.remove("hidden");
          message.classList.add("good-guess");
          message.classList.remove("bad-guess");
          askNewGame.classList.toggle("hidden");
          gameReset.classList.toggle("hidden");
          warnPlayer.classList.add("hidden");
        } else {
          if (!(e.key in letterObj)) {
            message.innerText = "Nope, wrong letter";
            message.classList.remove("hidden");
            message.classList.add("bad-guess");
            failedLetters.classList.remove("hidden");
            failedLetters.innerHTML += `${e.key},`;
            letterObj[e.key] = 1;
            console.log(letterObj);
          } else {
            warnPlayer.classList.remove("hidden");
            warnPlayer.innerHTML = `You already guessed that letter!`;
          }
        }
      }
    }
  }
};

const newGame = () => {
  activeGame = true;
  for (let x in letterObj) {
    console.log(x);
  }
};

document.addEventListener("keyup", randomGuess);
gameReset.addEventListener("click", newGame);
