const form = document.querySelector(".login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
  event.preventDefault();
  const formEl = event.currentTarget.elements;
  const email = formEl.email.value;
  const password = formEl.password.value;
  
  const formData = {
    email,
    password,
  }

  if (email === "" || password === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(formData);

  event.currentTarget.reset();
}