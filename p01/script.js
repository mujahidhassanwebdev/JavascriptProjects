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

// Function to check if required fields have data
function checkRequired(inputArray) {
    inputArray.forEach(element => {
        if(element.value === '') {
            showError(element,  `${capitalizeInputName(element)} is required`)
            
        } else {
            showSuccess(element);
            
        }
    });
}

// function to get capitlize name
function capitalizeInputName(inputID) {
    
    return inputID.id.charAt(0).toUpperCase() + inputID.id.slice(1);
    
}

// function to check the length of the field (min and max)

function checkLength(input, min, max) {
    if (input.value.length >= min && input.value.length <= max) {
        showSuccess(input);   
        
    } else {
        showError(input, `${capitalizeInputName(input)} needs to be minimum ${min} and maximum ${max}`);
    }
}

// Function to check if password and confirm password text are matching

function checkConfirmPassword(input1, input2) {
   if (input1.value !== input2.value) {
        showError(input2, 'Password and Confirm Password does not match');
   } else {
       showSuccess(input2);
   } 
}

// This is an event listener for a form on submit
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Check Required Fields 
    checkRequired([username, email, password, password2])
    checkLength(username, 3, 10);
    checkLength(password, 6, 30);
    isEmailValid(email);
    checkConfirmPassword(password, password2);
    
    

})

