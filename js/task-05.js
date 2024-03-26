const inputEl = document.querySelector("#name-input");
const outputEl = document.querySelector("#name-output");

function handleInput(event) {
  let inputValue = event.currentTarget.value.trim();
  if (inputValue) {
    outputEl.textContent = inputValue;
  } else {
    outputEl.textContent = "Anonymous";
  }
}

inputEl.addEventListener("input", handleInput);

// const nameInput = document.getElementById("name-input");
// const nameOutput = document.getElementById("name-output");

// // Function to update the name output
// function updateNameOutput() {
//   // Check if input value is empty
//   if (nameInput.value.trim() === "") {
//     nameOutput.textContent = "Anonymous";
//   } else {
//     nameOutput.textContent = nameInput.value;
//   }
// }

// // Add event listener for input event
// nameInput.addEventListener("input", updateNameOutput);
