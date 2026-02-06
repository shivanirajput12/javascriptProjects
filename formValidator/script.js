//select form and inputs
const form = document.querySelector("#signupForm");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const confirmPassword = document.querySelector("#confirmPassword");
const showPassword = document.querySelector("#showPassword");
const strengthMeter = document.querySelector("#strengthMeter");


//load saved data (persistence)
window.addEventListener("DOMContentLoaded",()=>{
    username.value = localStorage.getItem("username") || "";
    email.value = localStorage.getItem("email") || "";  
    email.value = localStorage.getItem("email") || "";
    password.value = localStorage.getItem("password") || "";
    confirmPassword.value = localStorage.getItem("confirmPassword") || "";
})


//save data while typing (persistence)
username.addEventListener("input",()=>{
    localStorage.setItem("username", username.value);
});

email.addEventListener("input",()=>{
    localStorage.setItem("email", email.value);
});

password.addEventListener("input",()=>{
    localStorage.setItem("password", password.value);
});

confirmPassword.addEventListener("input",()=>{
    localStorage.setItem("confirmPassword", confirmPassword.value);
}); 

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



//logic for strength meter

password.addEventListener("input", checkStrength);

function checkStrength(){
  const value = password.value;
  let strength = 0;

  if(value.length >= 6) strength++;
  if(/[A-Z]/.test(value)) strength++;
  if(/[0-9]/.test(value)) strength++;
  if(/[^A-Za-z0-9]/.test(value)) strength++;

  strengthMeter.className = "";

  if(strength <= 1){
    strengthMeter.classList.add("weak");
  }else if(strength <= 3){
    strengthMeter.classList.add("medium");
  }else{
    strengthMeter.classList.add("strong");
  }
}

//logic for show password toggle

showPassword.addEventListener("change", () => {
  password.type = showPassword.checked ? "text" : "password";
  confirmPassword.type = showPassword.checked ? "text" : "password";
});

//form submit
form.addEventListener("submit", (event) => {
  event.preventDefault();

  const isUsernameValid = validateUsername();
  const isEmailValid = validateEmail();
  const isPasswordValid = validatePassword();
  const isConfirmPasswordValid = validateConfirmPassword();

  if (
    isUsernameValid &&
    isEmailValid &&
    isPasswordValid &&
    isConfirmPasswordValid
  ) {
    alert("Form submitted successfully!");
    form.reset();

    //clear saved data on successful submission
    // localStorage.removeItem("username");
    // localStorage.removeItem("email");
    // localStorage.removeItem("password");
    // localStorage.removeItem("confirmPassword");

    //or we can use clear() to clear all localStorage
    localStorage.clear();

    //reset strength meter
    strengthMeter.className = "";
  }
}); 
