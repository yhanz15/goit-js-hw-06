// Array containing objects with image URLs and alt text
const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

// Get a reference to the unordered list element with the class "gallery" in the HTML document
const ul = document.querySelector(".gallery");

// Loop through each object in the 'images' array
for (let image of images) {
  // Create a new list item element for each image
  let li = document.createElement("li");

  // Set the inner HTML of the list item to include an image element with the URL and alt text from the current image object
  li.innerHTML = `<img src="${image.url}" alt="${image.alt}" />`;

  // Append the list item to the unordered list
  ul.appendChild(li);
}






// Explanation:

//     The images array contains objects, each representing an image with a url (image source) and alt (alternative text).
//     ul is a reference to the unordered list element with the class "gallery" in the HTML document.
//     A for...of loop iterates over each object in the images array.
//     Inside the loop:
//         A new list item (<li>) element is created for each image.
//         The innerHTML property of the list item is set to include an image element (<img>) with the src attribute set to the url of the current image object and the alt attribute set to the alt of the current image object.
//         The newly created list item is appended to the unordered list (ul) in the HTML document.
//     This code dynamically adds images to the gallery based on the data provided in the images array. Each image is represented as a list item (<li>) with an image element (<img>) inside it.

