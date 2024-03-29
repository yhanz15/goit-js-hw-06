// Get a NodeList of all elements with the class "item" in the HTML document
let categories = document.querySelectorAll(".item");

// Output the number of categories found
console.log(`Number of categories: ${categories.length}`);

// Iterate over each element in the NodeList using a for...of loop
for (let category of categories) {
  // Output the name of each category using the innerText property of its first child element
  console.log(`Category: ${category.firstElementChild.innerText}`);

  // Output the number of elements (items) within each category
  // Access the <ul> element containing the items using the nextElementSibling property of the first child element
  // Count the number of child elements (items) within the <ul> element using the children property
  console.log(
    `Elements: ${category.firstElementChild.nextElementSibling.children.length}`
  );
}


































// Explanation:

//     document.querySelectorAll(".item") selects all elements in the HTML document with the class "item" and returns a NodeList containing those elements. This NodeList is stored in the categories variable.
//     console.log(Number of categories: ${categories.length}); outputs the number of categories found in the document. The length of the categories NodeList gives us this count.
//     The for...of loop iterates over each element in the categories NodeList.
//         category represents each element (category) in the NodeList during each iteration.
//     console.log(Category: ${category.firstElementChild.innerText}); outputs the name of each category. It uses the firstElementChild property to access the first child element of each category (which should be an <h2> tag) and then retrieves its text content using the innerText property.
//     console.log(Elements: ${category.firstElementChild.nextElementSibling.children.length}); outputs the number of elements (items) within each category. It first uses firstElementChild.nextElementSibling to access the <ul> element (the next sibling of the <h2> tag), and then it counts the number of child elements (items) within the <ul> element using the children property and its length.
