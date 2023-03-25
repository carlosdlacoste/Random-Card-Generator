/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let valor = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A"
  ];
  let pinta = ["♦", "♥", "♠", "♣"];

  function cardRandom(array) {
    colorPinta();
    return array[Math.floor(Math.random() * array.length)];
  }

  function colorPinta() {
    if (printPinta == "♦" || printPinta == "♥") {
      document.getElementById("pinta-superior").style.color = "red";
      document.getElementById("pinta-inferior").style.color = "red";
    }
  }

  let printPinta = `${cardRandom(pinta)}`;
  document.getElementById("pinta-superior").innerHTML = printPinta;
  document.getElementById("pinta-inferior").innerHTML = printPinta;

  let printValor = `${cardRandom(valor)}`;
  document.getElementById("valor").innerHTML = printValor;
};
