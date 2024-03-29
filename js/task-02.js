// Array containing a list of ingredients
const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatoes",
  "Herbs",
  "Condiments",
];

// Get a reference to the unordered list element with the id "ingredients" in the HTML document
let ul = document.getElementById("ingredients");

// Loop through each item (ingredient) in the 'ingredients' array
for (let ingredient of ingredients) {
  // Create a new list item element for each ingredient
  let li = document.createElement("li");

  // Set the text content of the list item to the current ingredient
  li.innerText = ingredient;

  // Append the newly created list item to the unordered list
  ul.appendChild(li);
}






// Explanation:

//     The ingredients array contains a list of ingredients.
//     ul is a reference to the unordered list element with the id "ingredients" in the HTML document.
//     A for...of loop iterates over each item (ingredient) in the ingredients array.
//     Inside the loop:
//         A new list item (<li>) element is created for each ingredient using document.createElement('li').
//         The innerText property of the list item is set to the current ingredient using li.innerText = ingredient. This sets the text content of the list item to the name of the ingredient.
//         The newly created list item is appended to the unordered list (ul) in the HTML document using ul.appendChild(li).
//     This code dynamically adds list items to the unordered list based on the data provided in the ingredients array. Each ingredient is represented as a list item (<li>) within the unordered list (<ul>).

