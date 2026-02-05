// select elements
const textInput = document.querySelector("#textInput");
const currentCount = document.querySelector("#current");
const counter = document.querySelector("#counter");
const wordCountEl = document.querySelector("#words");
const clearBtn = document.querySelector("#clearBtn");

// set max limit
const maxChars = 280;

// input event
textInput.addEventListener("input", function () {
  let value = textInput.value;

  // ✅ Prevent typing beyond limit
  if (value.length > maxChars) {
    value = value.slice(0, maxChars);
    textInput.value = value;
  }

  const currentLength = value.length;
  currentCount.textContent = currentLength;

  // ✅ Word count logic
  const words = value
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);

  wordCountEl.textContent = value.trim() === "" ? 0 : words.length;

  const remainingChars = maxChars - currentLength;

  // reset classes
  counter.classList.remove("warning", "danger");
  textInput.classList.remove("over-limit");

  // styling zones
  if (remainingChars <= 20) {
    counter.classList.add("danger");
  } else if (remainingChars <= 50) {
    counter.classList.add("warning");
  }
});

// ✅ Clear Button
clearBtn.addEventListener("click", () => {
  textInput.value = "";
  currentCount.textContent = 0;
  wordCountEl.textContent = 0;

  counter.classList.remove("warning", "danger");
  textInput.classList.remove("over-limit");

  textInput.focus();
});


// Event comparison (for learning)
textInput.addEventListener("change", () => {
  console.log("change fired");
});

textInput.addEventListener("keyup", () => {
  console.log("keyup fired");
});

textInput.addEventListener("keydown", () => {
  console.log("keydown fired");
});
