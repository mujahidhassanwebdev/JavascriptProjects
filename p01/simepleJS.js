const form = document.getElementById('form');

const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// All functions
// Function to show error
function showError(inputField, errorMessage) {
    const formControlElement = inputField.parentElement;
    formControlElement.className = 'form-control error';
    const smallElement = formControlElement.querySelector('small');
    smallElement.innerText = errorMessage;
}

// Function to show success
function showSuccess(inputField) {
    const formControlElement = inputField.parentElement;
    formControlElement.className = 'form-control success';
}

// Function to check email validity
function isEmailValid(email) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value))
  {
    showSuccess(email);
  }
  else {
      showError(email,'You have entered an invalid email address!');
  }    
}

// This is an event listener for a form on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (username.value === '') {
        showError(username, "Username is a required field");
    }
    else {
        showSuccess(username);
    }

    if (email.value === '') {
        showError(email, "Email is a required field");
    }
    else {
        showSuccess(email);
        isEmailValid(email);
    }

    if (password.value === '') {
        showError(password, "Password is a required field");
    }
    else {
        showSuccess(password);
    }

    if (password2.value === '') {
        showError(password2, "Confirm Password is a required field");
    }
    else {
        showSuccess(password2);
    }


})

