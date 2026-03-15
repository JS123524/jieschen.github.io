const contactForm = document.getElementById("contact-form");
const firstNameInput = document.getElementById("first-name");
const lastNameInput = document.getElementById("last-name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const formStatus = document.getElementById("form-status");

let msgTimer;

const isValidEmail = (email) => {
  return email.includes("@") && email.includes(".");
};

const showMessage = (msg) => {
  clearTimeout(msgTimer);

  formStatus.textContent = msg;
  formStatus.classList.add("show");

  msgTimer = setTimeout(() => {
    formStatus.classList.remove("show");
  }, 2000);
};

const handleSubmit = (event) => {
  event.preventDefault();

  const firstName = firstNameInput.value.trim();
  const lastName = lastNameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();

  if (firstName === "") {
    showMessage("Please enter your first name.");
    firstNameInput.focus();
    return;
  }

  if (lastName === "") {
    showMessage("Please enter your last name.");
    lastNameInput.focus();
    return;
  }

  if (email === "") {
    showMessage("Please enter your email address.");
    emailInput.focus();
    return;
  }

  if (!isValidEmail(email)) {
    showMessage("Please enter a valid email address.");
    emailInput.focus();
    return;
  }

  if (message !== "" && message.length < 10) {
    showMessage("Please enter a longer message.");
    messageInput.focus();
    return;
  }

  showMessage("Your message has been submitted successfully.");
  contactForm.reset();
};

contactForm.addEventListener("submit", handleSubmit);
