// // Get reference to the input element
// const validationInput = document.getElementById("validation-input");

// // Function to handle blur event
// function handleBlur() {
//   const inputValue = validationInput.value.trim();
//   const expectedLength = parseInt(validationInput.getAttribute("data-length"));

//   // Check if the length of the input value matches the expected length
//   if (inputValue.length === expectedLength) {
//     validationInput.classList.remove("invalid");
//     validationInput.classList.add("valid");
//   } else {
//     validationInput.classList.remove("valid");
//     validationInput.classList.add("invalid");
//   }
// }

// // Add event listener for blur event
// validationInput.addEventListener("blur", handleBlur);

const inputEl = document.getElementById("validation-input");

const handleLength = function (e) {
  const inputValue = this.value.trim().length;

  // const inputValue = e.target.value.trim().length;
  // NOTE: You can either used the code above this line, I used 'this' keyword because, 'this' in a handler function (except arrow function) is the element calling itself right? in this case it's the same as input element :))

  // const requiredLength = this.dataset.length;
  const requiredLength = e.target.dataset.length;

  if (inputValue === parseInt(requiredLength)) {
    inputEl.classList.remove("invalid");
    inputEl.classList.add("valid");
  } else {
    inputEl.classList.remove("valid");
    inputEl.classList.add("invalid");
  }
};

inputEl.addEventListener("blur", handleLength);
