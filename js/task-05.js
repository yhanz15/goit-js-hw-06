// Get a reference to the input element with the id "name-input" in the HTML document
const inputEl = document.querySelector("#name-input");

// Get a reference to the span element with the id "name-output" in the HTML document
const outputEl = document.querySelector("#name-output");

// Define a function called handleInput that takes an event (event) as a parameter
function handleInput(event) {
  // Access the value of the input element that triggered the event (currentTarget)
  // Trim the input value to remove any leading or trailing white spaces
  let inputValue = event.currentTarget.value.trim();

  // Check if the trimmed input value is not empty
  if (inputValue) {
    // If the input value is not empty, set the text content of the output element to the input value
    outputEl.textContent = inputValue;
  } else {
    // If the input value is empty, set the text content of the output element to "Anonymous"
    outputEl.textContent = "Anonymous";
  }
}

// Add an event listener to the input element for the "input" event
// The "input" event occurs when the value of the input element changes
// When the input value changes, call the handleInput function to handle the input
inputEl.addEventListener("input", handleInput);



// Explanation:

//     The inputEl variable stores a reference to the input element with the id "name-input" in the HTML document.
//     The outputEl variable stores a reference to the span element with the id "name-output" in the HTML document.
//     The handleInput function is defined to handle changes in the input value.
//     Inside the handleInput function:
//         The value of the input element that triggered the event (currentTarget) is accessed using event.currentTarget.value.
//         The input value is trimmed using the trim() method to remove any leading or trailing white spaces.
//         It checks if the trimmed input value is not empty. If it's not empty:
//             It sets the text content of the output element (outputEl.textContent) to the trimmed input value.
//         If the input value is empty:
//             It sets the text content of the output element to "Anonymous".
//     An event listener is added to the input element for the "input" event. When the input value changes, the handleInput function is called to handle the input and update the output accordingly.


