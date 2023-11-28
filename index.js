const bookmarkButtons = document.querySelectorAll(".bookmark");
const antwortButton = document.getElementById("antwortButton");
const verbergenButton = document.getElementById("verbergenButton");
const antwortTextElement = document.getElementById("antwort");

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("button-toggle");
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
