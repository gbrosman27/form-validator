// Variables for the inputs
const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

// Show input error message
function showError(input, message) {
    // Grab the parent element of the input (div with class of form-control)
    const formControl = input.parentElement;
    // Change the class name
    formControl.className = 'form-control error';
    // Grab the small element and change the text to the passed in message
    const small = formControl.querySelector('small');
    small.innerText = message;
}



// Event listener for a submit. Function takes an event as arguement.
form.addEventListener('submit', function(e) {
    // Prevents from actual submitting
    e.preventDefault();
    
    // If username is empty, display error message
    if(username.value === '') {
        showError(username, 'Username is required');
    } else {
        showSuccess(username);
    }
});