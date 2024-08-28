/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here

  // asignar el boton a una variable
  const button = document.getElementById("generateButton");

  //  agregar un evento de click al boton que llame a la funcion generateCard
  button.addEventListener("click", generateCard);

  // llamar a la funcion para generar la carta cuando carga la pagina
  generateCard();

  // temporizador
  setInterval(generateCard, 10000);
};
// funcion para generara una carta
function generateCard() {
  const suits = ["♥", "♦", "♣", "♠"];
  const values = [
    "A",
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
    "K"
  ];
  // Seleccionar un valor y un palo aleatoriamente
  const randomValue = values[Math.floor(Math.random() * values.length)];
  const randomSuit = suits[Math.floor(Math.random() * suits.length)];

  // Actualizar el contenido de la carta

  document.getElementById("cardValue").innerText = randomValue;
  document.getElementById("topLeftSuit").innerText = randomSuit;
  document.getElementById("bottomRightSuit").innerText = randomSuit;

  // Cambiar  color  palos según corresponda (rojo para corazones y diamantes)

  if (randomSuit === "♥" || randomSuit === "♦") {
    document.getElementById("topLeftSuit").style.color = "red";
    document.getElementById("bottomRightSuit").style.color = "red";
  }
}
