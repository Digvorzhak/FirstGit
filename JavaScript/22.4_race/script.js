const step = document.getElementsByTagName("td");
const player1 = document.querySelector("#player1-race");
const player2 = document.querySelector("#player2-race");
const restart = document.querySelector(".reset");

let player1Road = [];
let player2Road = [];
let counter = 0;
let activeGame = true;

for (let i = 0; i < step.length; i++) {
  while (i < step.length / 2) {
    player1Road[i] = step[i];
    i++;
  }
  while (i >= step.length / 2 && i < step.length) {
    player2Road[counter] = step[i];
    i++;
    counter++;
  }
}
console.log(player1Road);

const player1move = (e) => {
  if (e.key === "z") {
    if (activeGame) {
      for (let i = 0; i < player1Road.length; i++) {
        if (player1Road[i].className === "active") {
          player1Road[i].classList.toggle("active");
          player1Road[i + 1].classList.toggle("active");
          if (player1Road[i + 1].className === "finish active") {
            activeGame = false;
            return gameOver(true);
          }
          return;
        }
      }
    }
  }
};
const player2move = (e) => {
  if (e.key === "m") {
    if (activeGame) {
      for (let i = 0; i < player2Road.length; i++) {
        if (player2Road[i].className === "active") {
          player2Road[i].classList.toggle("active");
          player2Road[i + 1].classList.toggle("active");
          console.log(player2Road);
          if (player2Road[i + 1].className === "finish active") {
            activeGame = false;
            return gameOver(false);
          }
          return;
        }
      }
    }
  }
};

const gameOver = (boolean) => {
  if (boolean) {
    return console.log("Player 1 has won the race!");
  } else return console.log("Player 2 has won the race!");
};

const newGame = () => {
  activeGame = true;
  for (let i = 0; i < player1Road.length; i++) {
    if (i === 0) {
      player1Road[i].classList.add("active");
    } else player1Road[i].classList.remove("active");
  }
  for (let i = 0; i < player2Road.length; i++) {
    if (i === 0) {
      player2Road[i].classList.add("active");
    } else player2Road[i].classList.remove("active");
  }
};

document.addEventListener("keyup", player1move);
document.addEventListener("keyup", player2move);
restart.addEventListener("click", newGame);
