// Get a reference to the <form> element with the class "login-form" in the HTML document
const form = document.querySelector("form.login-form");

// Log the form element to the console for debugging purposes
console.log(form);

// Add an event listener to the form for the "submit" event, which triggers the onFormSubmit function
form.addEventListener("submit", onFormSubmit);

// Define the onFormSubmit function to handle form submission
function onFormSubmit(event) {
  // Prevent the default form submission behavior, which would cause the page to reload
  event.preventDefault();

  // Access the form elements within the form that triggered the submit event
  const formElements = event.currentTarget.elements;

  // Retrieve the values entered by the user in the email and password input fields
  const email = formElements.email.value;
  const password = formElements.password.value;

  // Check if either the email or password is empty
  if (email == "" || password == "") {
    // If either input parameter is empty, display an alert message
    alert("Enter both input parameters!");

    // Reset the form to clear the input fields
    form.reset();

    // Return false to prevent further processing of the form submission
    return false;
  }

  // If both email and password are provided, create an object to hold the form data
  const formData = {
    email,
    password,
  };

  // Log the form data to the console for debugging purposes
  console.log(formData);

  // Reset the form to clear the input fields after processing the form data
  form.reset();
}








































// Explanation:

//     The querySelector() method is used to select the <form> element with the class "login-form" from the HTML document.
//     The form variable stores a reference to this selected form element.
//     The addEventListener() method is used to attach an event listener to the form for the "submit" event. When the form is submitted, the onFormSubmit function is called.
//     In the onFormSubmit function:
//         event.preventDefault() prevents the default form submission behavior, ensuring that the form data is handled by JavaScript without causing a page reload.
//         event.currentTarget refers to the form element that triggered the submit event.
//         formElements is an array-like object containing all form elements within the form.
//         The values of the email and password input fields are retrieved from formElements.
//         If either the email or password is empty, an alert message is displayed, and the form is reset using form.reset().
//         If both email and password are provided, an object formData is created to hold the form data. This object is logged to the console.
//         Finally, the form is reset to clear the input fields after processing the form data.
