const result = document.getElementById("result");
const leftDice = document.querySelector(".img1");
const rightDice = document.querySelector(".img2");
let leftRandom = Math.random();
leftRandom = Math.floor(leftRandom * 6) + 1;
let rightRandom = Math.random();
rightRandom = Math.floor(rightRandom * 6) + 1;
leftDice.setAttribute("src", `./images/dice${leftRandom}.png`);
rightDice.setAttribute("src", `./images/dice${rightRandom}.png`);
if (leftRandom > rightRandom) {
  result.innerHTML = "Player 1 wins!";
} else if (rightRandom > leftRandom) {
  result.innerHTML = "Player 2 wins!";
} else {
  result.innerHTML = "It's a draw!";
}
