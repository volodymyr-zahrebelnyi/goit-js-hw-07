const inputName = document.querySelector("#name-input");
const outputName = document.querySelector("#name-output");

inputName.addEventListener("input", (evt) => {
  const currentValue = evt.currentTarget.value.trim();

  if (currentValue === "") {
    outputName.textContent = "Anonymous";
  } else {
    outputName.textContent = currentValue;
  }
});
