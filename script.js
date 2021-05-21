// Variables for the inputs. Grab the ID from the html.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    // Grab the parent element of the input (div with class of form-control)
    const formControl = input.parentElement;
    // Change the class name by overriding the html classname
    formControl.className = 'form-control error';
    // Grab the small element and change the text to the passed in message. querySelector can take in a class, id, tag
    const small = formControl.querySelector('small');
    small.innerText = message;
}

// Show success outline
function showSuccess(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';  
}

// Check email is valid. test method returns true of false.
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

// Check required fields. Use built in forEach method to loop through array.
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        // trim whitespace off
        if (input.value.trim() === '') {
            // input.id specifies the array value
            showError(input, `${input.id} is required`); 
        } else {
            showSuccess(input);
        }
    })
}



// Event listener for a submit. Function takes an event as arguement.
form.addEventListener('submit', function(e) {
    // Prevents from actual submitting
    e.preventDefault();
    
    // Create array of inputs and pass to the checkRequired function to be validated.
    checkRequired([username, email, password, password2]);
});