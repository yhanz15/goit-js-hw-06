// Function to generate a random HEX color
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Object to store references to DOM elements related to controls
const controls = {
  // Reference to the input element for number of boxes
  numberEl: document.querySelector("#controls").children[0],
  // Reference to the "Create" button
  createButton: document.querySelector("#controls").children[1],
  // Reference to the "Destroy" button
  destroyButton: document.querySelector("#controls").children[2],
};

// Reference to the div container for boxes
const boxes = document.querySelector("#boxes");

// Event listener for the "Create" button
controls.createButton.addEventListener("click", () => {
  // When the "Create" button is clicked, call createBoxes function with the number of boxes specified by the user
  createBoxes(controls.numberEl.value);
});

// Event listener for the "Destroy" button
controls.destroyButton.addEventListener("click", () => {
  // When the "Destroy" button is clicked, clear the contents of the boxes container
  boxes.innerHTML = "";
});

// Function to create boxes
function createBoxes(amount) {
  // Loop to create the specified number of boxes
  for (let i = 1; i <= amount; i += 1) {
    // Create a new div element for each box
    const newBox = document.createElement("div");
    // Set a unique id for each box (optional)
    const divIdName = i;
    // Set the width and height of the box (increasing with each box)
    newBox.style.width = 20 + i * 10 + "px";
    newBox.style.height = 20 + i * 10 + "px";
    // Set a random background color for each box
    newBox.style.backgroundColor = getRandomHexColor();
    // Set the id attribute of the box
    newBox.setAttribute("id", divIdName);
    // Clear the input field after creating the boxes
    controls.numberEl.value = "";
    // Append the new box to the boxes container
    boxes.append(newBox);
  }
}


// This script sets up event listeners for the "Create" and "Destroy" buttons. When the "Create" button is clicked, it calls the createBoxes function to generate the specified number of boxes with increasing sizes and random colors. When the "Destroy" button is clicked, it clears the contents of the boxes container.