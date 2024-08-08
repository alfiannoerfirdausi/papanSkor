const p1Display = document.querySelector("#p1-display");
const p2Display = document.querySelector("#p2-display");

const p1Button = document.querySelector("#p1-button");
const p2Button = document.querySelector("#p2-button");
const btnReset = document.querySelector("#reset");

const pointOps = document.querySelector("#pointOption");

let startPointp1 = 0;
let startPointp2 = 0;
let winPoint = 3;
let gameOver = false;

function riset() {
  gameOver = false;
  startPointp1 = 0;
  startPointp2 = 0;

  p1Display.textContent = 0;
  p2Display.textContent = 0;
}

p1Button.addEventListener("click", () => {
  if (!gameOver) {
    startPointp1 += 1;
    if (startPointp1 == winPoint) {
      gameOver = true;
    }
    p1Display.textContent = startPointp1;
  }
});

p2Button.addEventListener("click", () => {
  if (!gameOver) {
    startPointp2 += 1;
    if (startPointp2 == winPoint) {
      gameOver = true;
    }
    p2Display.textContent = startPointp2;
  }
});

btnReset.addEventListener("click", riset);

pointOps.addEventListener("change", (e) => {
  winPoint = parseInt(e.target.value);
  riset();
});
