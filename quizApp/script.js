const quizData = [
  {
    question: "What does DOM stand for?",
    options: [
      "Document Object Model",
      "Data Object Model",
      "Document Oriented Model",
      "Digital Object Model",
    ],
    correct: 0,
  },
  {
    question: "Which method selects an element by ID?",
    options: [
      "querySelector()",
      "getElementsByClassName()",
      "getElementById()",
      "selectById()",
    ],
    correct: 2,
  },
  {
    question: "What property changes text inside an element?",
    options: ["innerHTML only", "textContent", "innerValue", "setText()"],
    correct: 1,
  },
  {
    question: "Which event fires when a form is submitted?",
    options: ["click", "change", "submit", "send"],
    correct: 2,
  },
  {
    question: "How do you add a class to an element?",
    options: [
      "element.class = 'name'",
      "element.classList.add('name')",
      "element.addClass('name')",
      "element.className.add('name')",
    ],
    correct: 1,
  },
];

//state variables
let currentQuestion = 0;
let score = 0;
let timeLeft = 30; //30 seconds for quiz
let timeInterval; //to store timer interval
let answered = false; //to prevent multiple answers

//select elements
const startBtn = document.querySelector(".startBtn");
const questionEl = document.querySelector("#question");
const optionEl = document.querySelector("#options");
const counterEl = document.querySelector("#questionCounter");
const timerEl = document.querySelector("#timer");
const nextBtn = document.querySelector("#nextBtn");
const container = document.querySelector("#quizContainer");

container.style.display = "none";

//load first question

function loadQuestion() {
  answered = false;
  const current = quizData[currentQuestion];

  questionEl.textContent = current.question;
  counterEl.textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;

  //clear and create options
  optionEl.innerHTML = "";
  current.options.forEach((option, index) => {
    const button = document.createElement("button");
    button.classList.add("option");
    button.textContent = option;
    button.addEventListener("click", () => selectOption(index));
    optionEl.appendChild(button);
  });
  nextBtn.style.display = "none";

  //start timer
  startTimer();
}

//handle option selection
function selectOption(index) {
  if (answered) return; //prevent multiple answers
  answered = true;
  clearInterval(timeInterval);

  const current = quizData[currentQuestion];
  const options = document.querySelectorAll(".option");

  // Mark selected option
  options[index].classList.add("selected");
  //checks if answer is correct
  if (index === current.correct) {
    options[index].classList.add("correct");
    score++;
  } else {
    options[index].classList.add("incorrect");
    options[current.correct].classList.add("correct");
  }

  //disable all options
  options.forEach((opt) => (opt.style.pointerEvents = "none"));
  nextBtn.style.display = "block";

  //show next button
  nextBtn.style.display = "block";
}

//Timer function
function startTimer() {
  timeLeft = 30;
  timerEl.textContent = `Time: ${timeLeft}s`;

  timeInterval = setInterval(() => {
    timeLeft--;
    timerEl.textContent = `Time: ${timeLeft}s`;

    if (timeLeft <= 0) {
      clearInterval(timeInterval);
      if (!answered) {
        answered = true;
        const correct = quizData[currentQuestion].correct;
        document.querySelectorAll(".option")[correct].classList.add("correct");
        nextBtn.style.display = "block";
      }
    }
  }, 1000);
}

//show results

function showResults() {
  container.innerHTML = `
    <div class="results">
      <h2>Quiz Complete!</h2>
      <p class="score">Your Score: ${score} / ${quizData.length}</p>
      <p>You got ${Math.round((score / quizData.length) * 100)}% correct!</p>
      <button id="restartBtn">Restart Quiz</button>
    </div>`;
  document.querySelector("#restartBtn").addEventListener("click", restartQuiz);
}

//restart quiz
function restartQuiz() {
  currentQuestion = 0;
  score = 0;
  location.reload(); //simple way to reset everything
}

//next button event
nextBtn.addEventListener("click", () => {
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    showResults();
  }
});

startBtn.addEventListener("click", () => {
  startBtn.style.display = "none"; // hide start button
  container.style.display = "block"; // show quiz

  loadQuestion(); // start quiz + timer
});
