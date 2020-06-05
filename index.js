
const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("mail");
const emailError = document.querySelector("#mail + span.error");

function onClickMenu() {
  document.getElementById("menu").classList.toggle("change-menu");
  document.getElementById("menu-close").classList.toggle("change-menu");
  document.getElementById("menu-list").classList.toggle("change-menu");
}

function showError() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to insert an email address";
    email.classList.add("invalid-box");
  }
  else if (email.validity.typeMismatch) {
    emailError.textContent = "Please insert a valid email";
    email.classList.add("invalid-box");
  }
}


email.addEventListener("input", function(event) {
  if (email.validity.valid) {
    emailError.innerHTML = "";
    emailError.className = "error";
    email.classList.remove("invalid-box")
  }
  else {
    showError();
  }
});

form.addEventListener("submit", function(event) {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});
