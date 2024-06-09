// // варіант 1

// const form = document.querySelector(".login-form");
// form.addEventListener("submit", handlerGetFormData);

// function handlerGetFormData(evt) {
//   evt.preventDefault();
//   const { email, password } = evt.currentTarget.elements;
//   const data = {
//     email: email.value.trim(),
//     password: password.value.trim(),
//   };
//   if (email.value === "" || password.value === "") {
//     console.log("All form fields must be filled in");
//   } else {
//     console.log(`Email: ${data.email},  Password: ${data.password}`);
//   }
//   form.reset();
// }

// // варіант 2

// const form = document.querySelector(".login-form");
// form.addEventListener("submit", handlerGetFormData);

// function handlerGetFormData(evt) {
//   evt.preventDefault();

//   const email = form.elements.email.value.trim();
//   const password = form.elements.password.value.trim();
//   if (email === "" || password === "") {
//     console.log("All form fields must be filled in");
//   } else {
//     console.log(`Email: ${email},  Password: ${password}`);
//   }
//   form.reset();
// }

// варіант 3

const form = document.querySelector(".login-form");
form.addEventListener("submit", handlerGetFormData);

function handlerGetFormData(evt) {
  evt.preventDefault();

  const formData = new FormData(evt.currentTarget);
  const data = {};
  formData.forEach((value, key) => (data[key] = value.trim()));
  const { email, password } = data;
  if (email === "" || password === "") {
    console.log("All form fields must be filled in");
  } else {
    console.log(`Email: ${email},  Password: ${password}`);
  }
  form.reset();
}
