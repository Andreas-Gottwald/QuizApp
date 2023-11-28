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
  antwortTextElement.textContent = "🤯";
  antwortTextElement.style.display = "block";
  antwortButton.style.display = "none";
  verbergenButton.style.display = "block";
});

verbergenButton.addEventListener("click", function () {
  antwortTextElement.style.display = "none";
  antwortButton.style.display = "block";
  verbergenButton.style.display = "none";
});
