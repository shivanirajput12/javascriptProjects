
//select all elements that we need
const textInput = document.querySelector("#textInput");
const currentCount = document.querySelector("#current");
const counter = document.querySelector("#counter");



//set the maximum character limit
const maxChars = 280;


//listen for input event on text area(fires when user types or pastes text)

textInput.addEventListener("input", function (event) {
  // get current length of text
  const currentLength = textInput.value.length;

  //update the current count display
  currentCount.textContent = currentLength;

  //calculate remaining characters
  const remainingChars = maxChars - currentLength;

  //remove all status classes first
  counter.classList.remove("warning", "danger");
  textInput.classList.remove("over-limit");

  //apply appropriate styling based on remaaining characters
  if (remainingChars < 0) {
    //over the limit
    counter.classList.add("danger");
    textInput.classList.add("over-limit");
  } else if (remainingChars <= 20) {
    //getting close to the limit
    counter.classList.add("danger");
  } else if (remainingChars <= 50) {
    //warning zone
    counter.classList.add("warning");
  }
});


//compare these events
textInput.addEventListener('input', ()=>{
  console.log("fires on every change");
  
});

textInput.addEventListener('change', ()=>{
  console.log("fires only when you click outside the text area after making changes");
});

textInput.addEventListener('keyup', ()=>{
  console.log("fires when you release a key");
});

textInput.addEventListener('keydown', ()=>{
  console.log("fires when you press down a key");
});