//select form and inputs
const form = document.querySelector("#signupForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");


//validation functions
function showError(input, message){
    const errorElement = document.querySelector(`#${input.id}Error`);
    input.classList.remove('success');
    input.classList.add('error');
    errorElement.textContent = message;
    errorElement.classList.add('show');
}

function showSuccess(input){
    const errorElement = document.querySelector(`#${input.id}Error`);
    input.classList.remove('error');
    input.classList.add('success');
    errorElement.textContent = '';
    errorElement.classList.remove('show');
}

function validateUsername(){
    const value = username.value.trim();
    if(value === ''){
        showError(username, 'Username is required');
        return false;
    } else if(value.length < 3){
        showError(username, 'Username must be at least 3 characters');
        return false;
    } else {
        showSuccess(username);
        return true;
    }
}


function validateEmail(){
    const value = email.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(value === ''){
        showError(email, 'Email is required');
        return false;
    } else if(!emailRegex.test(value)){
        showError(email, 'Email is not valid');
        return false;
    } else {
        showSuccess(email);
        return true;
    }
}

function validatePassword(){
    const value = password.value.trim();
    if(value === ''){
        showError(password, 'Password is required');
        return false;
    } else if(value.length < 6){
        showError(password, 'Password must be at least 6 characters');
        return false;
    } else {
        showSuccess(password);
        return true;
    }
}

function validateConfirmPassword(){
    const value = confirmPassword.value.trim();
    if(value === ''){
        showError(confirmPassword, 'Confirm Password is required');
        return false;
    } else if(value !== password.value.trim()){
        showError(confirmPassword, 'Passwords do not match');
        return false;
    } else {
        showSuccess(confirmPassword);
        return true;
    }
}

//realtime validation on input
username.addEventListener('input', validateUsername);
email.addEventListener('input', validateEmail);
password.addEventListener('input', validatePassword);
confirmPassword.addEventListener('input', validateConfirmPassword);

//form submit event
form.addEventListener('submit', function(event){
    event.preventDefault(); //prevent form submission

    const isUsernameValid = validateUsername();
    const isEmailValid = validateEmail();
    const isPasswordValid = validatePassword();
    const isConfirmPasswordValid = validateConfirmPassword();

    if(isUsernameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid){
        alert('Form submitted successfully!');
        form.reset(); //reset form after successful submission
      
    }
}); 