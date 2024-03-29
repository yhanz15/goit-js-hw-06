// Function to generate a random HEX color
function getRandomHexColor() {
  // Generate a random number between 0 and 16777215 (2^24 - 1), which corresponds to all possible colors in HEX format
  // Convert the generated number to its hexadecimal representation
  // Ensure the hexadecimal representation has exactly 6 digits (padding with zeros if necessary)
  // Prepend '#' to signify it's a HEX color
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Get a reference to the <body> element in the HTML document
const body = document.querySelector("body");

// Get a reference to the <span> element with class "color" in the HTML document
const color = document.querySelector("span.color");

// Get a reference to the <button> element with class "change-color" in the HTML document
const colorChangerButton = document.querySelector("button.change-color");

// Add an event listener to the colorChangerButton for the "click" event
colorChangerButton.addEventListener("click", () => {
  // When the button is clicked, change the background color of the body to a random HEX color
  body.style.backgroundColor = getRandomHexColor();
  // Set the text content of the <span> element to a random HEX color
  color.textContent = getRandomHexColor();
});



// Explanation:

//     The getRandomHexColor() function generates a random HEX color code. It returns a string in the format #RRGGBB, where RR, GG, and BB are two-digit hexadecimal numbers representing the red, green, and blue components of the color, respectively.
//     The querySelector() method is used to select elements from the HTML document based on CSS selectors.
//     body, color, and colorChangerButton variables store references to the corresponding HTML elements.
//     An event listener is added to the colorChangerButton. When clicked, it changes the background color of the body and updates the text content of the color span to display a random HEX color.

