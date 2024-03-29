// Initialize counterValue variable to store the current counter value
let counterValue = 0;

// Get references to the counter elements
const valueElement = document.getElementById("value");
const incrementButton = document.querySelector('[data-action="increment"]');
const decrementButton = document.querySelector('[data-action="decrement"]');

// Update the interface with the initial counter value
valueElement.textContent = counterValue;

// Add event listeners to the increment and decrement buttons
incrementButton.addEventListener("click", () => {
  // Increase counterValue by 1 when increment button is clicked
  counterValue++;
  // Update the interface with the new counter value
  valueElement.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  // Decrease counterValue by 1 when decrement button is clicked
  counterValue--;
  // Update the interface with the new counter value
  valueElement.textContent = counterValue;
});

























// Explanation:

//     counterValue is a variable that stores the current counter value. It's initialized to 0.
//     valueElement, incrementButton, and decrementButton are references to the HTML elements for the counter value display (span) and the increment and decrement buttons, respectively.
//     The initial counter value is displayed in the interface by setting the text content of valueElement.
//     Event listeners are added to the increment and decrement buttons. When these buttons are clicked, the corresponding event handler functions are executed.
//     In the event handler functions, counterValue is incremented or decremented accordingly, and then the interface is updated to display the new counter value by setting the text content of valueElement.