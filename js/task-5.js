const body = document.querySelector("body");
const spanHexColor = document.querySelector(".color");
const button = document.querySelector(".change-color");
button.addEventListener("click", function () {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  spanHexColor.textContent = newColor;
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
