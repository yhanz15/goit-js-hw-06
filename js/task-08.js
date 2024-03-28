const form = document.querySelector("form.login-form");
console.log(form);

form.addEventListener("submit", onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const formElements = event.currentTarget.elements;
  const email = formElements.email.value;
  const password = formElements.password.value;

  if (email == "" || password == "") {
    alert("Enter both input parameters!");
    form.reset();
    return false;
  }

  const formData = {
    email,
    password,
  };
  console.log(formData);

  form.reset();
}
