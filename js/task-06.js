
// Get a reference to the input element with the id "validation-input" in the HTML document
const inputEl = document.getElementById("validation-input");

// Define a function called handleLength that takes an event (e) as a parameter
const handleLength = function (e) {
  // Within the handleLength function, calculate the length of the trimmed value of the input
  // 'this' inside the function refers to the element that triggered the event, which is the input element in this case
  const inputValue = this.value.trim().length;

  // Alternatively, you could access the value of the input element from the event object itself (e.target)
  // const inputValue = e.target.value.trim().length;

  // Retrieve the required length from the 'data-length' attribute of the input element
  // 'this' inside the function refers to the element that triggered the event, which is the input element in this case
  const requiredLength = this.dataset.length;

  // Alternatively, you could access the 'data-length' attribute from the event target
  // const requiredLength = e.target.dataset.length;

  // Check if the length of the input value matches the required length
  if (inputValue === parseInt(requiredLength)) {
    // If the lengths match, remove the 'invalid' class and add the 'valid' class to the input element
    this.classList.remove("invalid");
    this.classList.add("valid");
  } else {
    // If the lengths don't match, remove the 'valid' class and add the 'invalid' class to the input element
    this.classList.remove("valid");
    this.classList.add("invalid");
  }
};

// Add an event listener to the input element for the "blur" event, which occurs when the input loses focus
// When the input loses focus, call the handleLength function to validate the input length
inputEl.addEventListener("blur", handleLength);




// Explanation:

//     The inputEl variable stores a reference to the input element with the id "validation-input".
//     The handleLength function is defined to handle the validation logic when the input loses focus (on blur).
//     Inside the handleLength function:
//         The length of the trimmed value of the input is calculated using this.value.trim().length or e.target.value.trim().length.
//         The required length is retrieved from the data-length attribute of the input element using this.dataset.length or e.target.dataset.length.
//         The input value length is compared with the required length, and appropriate CSS classes (valid or invalid) are added or removed accordingly to indicate the validation status.
//     An event listener is added to the input element for the "blur" event, triggering the handleLength function to validate the input length when the input loses focus.

