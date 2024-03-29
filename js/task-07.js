// Get a reference to the input element with the id "font-size-control" in the HTML document
const fontSizeControlEl = document.querySelector("#font-size-control");

// Get a reference to the element with the id "text" in the HTML document
const textEl = document.querySelector("#text");

// Add an event listener to the fontSizeControlEl for the "input" event
fontSizeControlEl.addEventListener("input", (event) => {
  // When the value of the input changes, execute the callback function

  // Access the current value of the input element using event.currentTarget.value
  // Adjust the font size of the text element (textEl) based on the current value of the input
  // Concatenate the current value of the input with "px" to form the CSS value for font size
  textEl.style.fontSize = event.currentTarget.value + "px";
});





// Explanation:

//     The querySelector() method is used to select elements from the HTML document based on CSS selectors.
//     fontSizeControlEl variable stores a reference to the input element with the id "font-size-control".
//     textEl variable stores a reference to the element with the id "text".
//     An event listener is added to fontSizeControlEl for the "input" event. This event is triggered when the value of the input changes.
//     The event listener executes an arrow function when the input value changes. Inside this function:
//         event.currentTarget.value accesses the current value of the input element.
//         The font size of the text element (textEl) is adjusted based on the current value of the input.
//         The font size is set by updating the fontSize CSS property of the textEl element. The value is formed by concatenating the current value of the input with "px" to represent pixels.
//     As the user moves the range slider of the fontSizeControlEl, the font size of the textEl element changes dynamically.