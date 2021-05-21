// Variables for the inputs. Grab the ID from the html.
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');


// Show input error message.
function showError(input, message) {
    // Grab the parent element of the input (div with class of form-control).
    const formControl = input.parentElement;
    // Change the class name by overriding the html classname. Changes classname to communicate with CSS.
    formControl.className = 'form-control error';
    // Grab the small element and change the text to the passed in message. querySelector can take in a class, id, tag.
    const small = formControl.querySelector('small');
    small.innerText = message;
}


// Show success outline.
function showSuccess(input) {
    const formControl = input.parentElement;
    // Changes classname to communicate with CSS.
    formControl.className = 'form-control success';  
}


// Check email is valid. test method returns true of false.
function checkEmail(input) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (re.test(input.value.trim())){
        showSuccess(input);
    } else{
        showError(input, 'Email is not valid')
    }
}


// Check required fields. Use built in forEach method to loop through array.
function checkRequired(inputArray) {
    inputArray.forEach(function(input) {
        // trim whitespace off.
        if (input.value.trim() === '') {
            // Call getFieldName to capitalize the first letter of the corresponding input.
            showError(input, `${getFieldName(input)} is required`); 
        } else {
            showSuccess(input);
        }
    })
}


// Check the length of the username and the password.
function checkLength(input, min, max){
    if (input.value.length < min) {
        showError(input, `${getFieldName(input)} must be at least ${min} characters`);
    } else if (input.value.length > max) {
        showError(input, `${getFieldName(input)} cannot be more than ${max} characters`);
    } else {
        showSuccess(input);
    }
}


// Compare password and password2 for matching values.
function checkPasswordMatch(input1, input2){
    if (input1.value !== input2.value) {
        showError(input2, 'Passwords do not match');
    }
}


// Uppercase the first letter of input.
function getFieldName(input){
    // Take the letter at index 0 and uppercase it. 
    // Concatenate with input id. Use slice method starting at index 1 to add back the rest of the word.
    return input.id.charAt(0).toUpperCase() + input.id.slice(1);
}


// Event listener for a submit. Function takes an event as arguement.
form.addEventListener('submit', function(e) {
    // Prevents from actual submitting.
    e.preventDefault();
    
    // Create array of inputs and pass to the checkRequired function to be validated.
    checkRequired([username, email, password, password2]);

    // Check length of username. Minimum 3, maximum 15 characters.
    checkLength(username, 3, 15);

    // Check length of password. Minimum 6, maximum 25 characters.
    checkLength(password, 6, 25);

    // Check if email is valid.
    checkEmail(email)

    // Check if passwords match.
    checkPasswordMatch(password, password2);
});