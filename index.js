const bookmarkButtons = document.querySelectorAll(".bookmark");

bookmarkButtons.forEach((button) => {
  button.addEventListener("click", () => {
    button.classList.toggle("button-toggle");
  });
});
