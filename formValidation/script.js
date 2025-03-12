const form = document.querySelector("#login-form");
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const errorDiv = document.getElementById("error-message");

// function validating inputs
function validateInput(input, errorMessage) {
  if (!input.value.trim()) {
    errorDiv.innerText = errorMessage;
    return false;
  }
  errorDiv.innerText = "";
  return true;
}

usernameInput.addEventListener("blur", () => {
  validateInput(usernameInput, "username required");
});

passwordInput.addEventListener("blur", (e) => {
  validateInput(passwordInput, "password required");
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const validUserName = validateInput(usernameInput, "username required");
  
  if (!validUserName) return

  const validPassword = validateInput(passwordInput, "password required");

  if(!validPassword) return

  console.log("Form Submitted");
  form.reset();

});