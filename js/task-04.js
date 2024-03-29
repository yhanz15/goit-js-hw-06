// Define a variable 'initialValue' and initialize it with the value 0
let initialValue = 0;

// Get a reference to the element with the id "value" in the HTML document
let value = document.getElementById("value");

// Set the inner text of the 'value' element to the initial value
value.innerText = initialValue;

// Get references to the buttons with data-action attributes "increment" and "decrement"
let incBtn = document.querySelector('[data-action="increment"]');
let decBtn = document.querySelector('[data-action="decrement"]');

// Add an onclick event handler to the increment button
incBtn.onclick = function () {
  // When the increment button is clicked, increase the 'initialValue' by 1
  initialValue += 1;

  // Update the inner text of the 'value' element to reflect the new value
  value.innerText = initialValue;
};

// Add an onclick event handler to the decrement button
decBtn.onclick = function () {
  // When the decrement button is clicked, check if the 'initialValue' is greater than 0
  if (initialValue > 0) {
    // If 'initialValue' is greater than 0, decrease it by 1
    initialValue -= 1;

    // Update the inner text of the 'value' element to reflect the new value
    value.innerText = initialValue;
  }
};





// Explanation:

//     initialValue is a variable that holds the initial value of the counter. It's set to 0.
//     value is a reference to the element with the id "value" in the HTML document. It represents the element where the counter value is displayed.
//     The innerText property of the value element is set to initialValue, so when the page loads, it displays the initial value (0).
//     incBtn and decBtn are references to the buttons with data-action attributes "increment" and "decrement", respectively.
//     An onclick event handler is added to both buttons. When clicked, they execute a function.
//     When the increment button is clicked (incBtn.onclick), the initialValue is increased by 1, and the updated value is displayed in the value element.
//     When the decrement button is clicked (decBtn.onclick), it first checks if initialValue is greater than 0. If it is, initialValue is decreased by 1, and the updated value is displayed in the value element. This prevents the counter from going below 0.


