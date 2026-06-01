"use strict";

let secretNum = Math.trunc(Math.random() * 99) + 1;

let score = 10;
let highscore = 0;
let message = document.querySelector(".message");
const displayMessage = function (message) {
  document.querySelector(".message").textContent = message;
};
const messageStyle = function (color) {
  document.querySelector(".message").style.color = color;
};
const displayNumber = function (value) {
  document.querySelector(".number").textContent = value;
};

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  if (!guess) {
    displayMessage("No number!");
  } else if (guess === secretNum) {
    displayMessage("You Won!");
    displayNumber(secretNum);
    document.querySelector("body").style.backgroundColor = "#8EE3B5";
    document.querySelector(".number").style.width = "30rem";
    messageStyle("#5C4B73");

    if (score > highscore) {
      highscore = score;
      document.querySelector(".highscore").textContent = highscore;
    }
  } else if (guess !== secretNum) {
    if (score > 1) {
      displayMessage(guess > secretNum ? "Too High!" : "Too Low!");
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      displayMessage("You Lost!");
      document.querySelector(".score").textContent = 0;
    }
  }
});

document.querySelector(".again").addEventListener("click", function () {
  score = 10;
  secretNum = Math.trunc(Math.random() * 99) + 1;
  document.querySelector(".score").textContent = score;
  displayMessage("Start guessing...");
  displayNumber("?");
  document.querySelector(".guess").value = "";

  document.querySelector("body").style.backgroundColor = "#2b213a";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".message").style.color = "#fff4e6";
});
