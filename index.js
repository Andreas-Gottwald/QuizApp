/*const bookmarkButtons = document.querySelectorAll('[data-js="button-toggle"]');
const antwortButton = document.getElementById("antwortButton");
const verbergenButton = document.getElementById("verbergenButton");
const antwortTextElement = document.getElementById("antwort");
const h2Element = document.querySelector('h2[data-js="button-toggle"]');

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("button-toggle");
    h2Element.classList.toggle("button-toggle");
  });
});



antwortButton.addEventListener("click", function () {
  antwortTextElement.textContent = "Mach den Test!";
  antwortTextElement.style.display = "block";
  antwortButton.style.display = "none";
  verbergenButton.style.display = "block";
});

verbergenButton.addEventListener("click", function () {
  antwortTextElement.style.display = "none";
  antwortButton.style.display = "block";
  verbergenButton.style.display = "none";
});

const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  let scale = Number(input.value);

  if (scale >= 0 && scale < 10) {
    output.innerHTML = "Du bist sau dumm!";
  } else if (scale >= 10 && scale < 20) {
    output.innerHTML = "dumm!";
  } else if (scale >= 20 && scale <= 99) {
    output.innerHTML = "semi dumm!";
  } else if (scale === 100) {
    output.innerHTML = "Du verstehst es trotzdem nicht!";
  } else {
    output.innerHTML = "Invalid input!";
  }
});
*/

const bookmarkButtons = document.querySelectorAll('[data-js="button-toggle"]');
const antwortButton = document.getElementById("antwortButton");
const verbergenButton = document.getElementById("verbergenButton");
const antwortTextElement = document.getElementById("antwort");
const h2Element = document.querySelector('h2[data-js="button-toggle"]');
const bookmarkElement = document.querySelector(".bookmark");
const dontPush = document.querySelector('[data-js="nicht-druecken"]');

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("button-toggle");
    h2Element.classList.toggle("button-toggle");

    button.style.color = button.classList.contains("button-toggle")
      ? "red"
      : "white";
  });
});

antwortButton.addEventListener("click", function () {
  antwortTextElement.textContent = "Mach den Test!";
  antwortTextElement.style.display = "block";
  antwortButton.style.display = "none";
  verbergenButton.style.display = "block";

  h2Element.style.color = "hotpink";
  bookmarkElement.style.color = "hotpink";
});

verbergenButton.addEventListener("click", function () {
  antwortTextElement.style.display = "none";
  antwortButton.style.display = "block";
  verbergenButton.style.display = "none";

  h2Element.style.color = "white";
  bookmarkElement.style.color = "white";
});

/* TEST */

const input = document.querySelector('[data-js="age-input"]');
const button = document.querySelector('[data-js="age-button"]');
const output = document.querySelector('[data-js="age-output"]');

button.addEventListener("click", () => {
  let scale = Number(input.value);

  if (scale >= 0 && scale < 10) {
    output.innerHTML = "Du bist sau dumm!";
  } else if (scale >= 10 && scale < 20) {
    output.innerHTML = "dumm!";
  } else if (scale >= 20 && scale <= 99) {
    output.innerHTML = "semi dumm!";
  } else if (scale === 100) {
    output.innerHTML = "Du verstehst es trotzdem nicht!";
  }
});

dontPush.addEventListener("click", function () {
  // Ändere die Hintergrundfarbe
  document.body.style.backgroundColor = "orange";

  // Ändere die Hintergrundfarbe der Section
  document.querySelector("section").style.backgroundColor = "yellow";

  // Ändere die Hintergrundfarbe der Navigation
  document.querySelector(".navigation").style.backgroundColor = "hotpink";

  document.querySelector("article").style.backgroundColor = "blue";

  // Ändere die Textfarbe und Hintergrundfarbe des H1-Tags
  const h1Element = document.querySelector("h1");
  h1Element.style.color = "black";
  h1Element.style.backgroundColor = "purple";

  // Erstelle ein neues Element für den "disco"-Text
  const discoText = document.createElement("div");
  discoText.textContent = "idiot";

  const bild = document.createElement("img");
  bild.src = "oldme.jpg"; // Hier den Pfad zum Bild einfügen
  bild.alt = "oldme";

  // Stile das Bild
  bild.style.position = "fixed";
  bild.style.top = "50%";
  bild.style.left = "50%";
  bild.style.transform = "translate(-50%, -50%) scale(2.5)"; // Vergrößere das Bild (scale-Faktor anpassen)

  // Füge das Bild zum Body hinzu
  document.body.appendChild(bild);

  // Stile das Element
  discoText.style.position = "fixed";
  discoText.style.top = "50%";
  discoText.style.left = "50%";
  discoText.style.transform = "translate(-50%, -50%)";
  discoText.style.fontSize = "55em";
  discoText.style.color = "black"; // Farbe nach Bedarf ändern

  // Füge das Element zum Body hinzu
  document.body.appendChild(discoText);
});
