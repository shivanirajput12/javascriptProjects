// Quiz Data
const quizData = [
  {
    question: "What does DOM stand for?",
    options: ["Document Object Model", "Data Model", "Digital Object", "None"],
    correct: 0,
    difficulty: "easy",
    category: "DOM"
  },
  {
    question: "Which method selects element by ID?",
    options: ["querySelector", "getElementById", "getById", "selectId"],
    correct: 1,
    difficulty: "easy",
    category: "DOM"
  },
  {
    question: "Form submit event?",
    options: ["click", "submit", "change", "send"],
    correct: 1,
    difficulty: "medium",
    category: "Events"
  },
  {
    question: "Add class to element?",
    options: [
      "element.className",
      "element.addClass",
      "element.classList.add",
      "setClass"
    ],
    correct: 2,
    difficulty: "hard",
    category: "DOM"
  }
];

let filteredQuestions = [];
let currentQuestion = 0;
let score = 0;
let timeInterval;
let timeLeft = 30;
let answered = false;

// Elements
const startBtn = document.querySelector(".startBtn");
const container = document.querySelector("#quizContainer");
const questionEl = document.querySelector("#question");
const optionsEl = document.querySelector("#options");
const counterEl = document.querySelector("#questionCounter");
const timerEl = document.querySelector("#timer");
const nextBtn = document.querySelector("#nextBtn");

// Show High Score
function displayHighScore() {
  const highScore = localStorage.getItem("highScore") || 0;
  document.querySelector("#highScoreDisplay").textContent =
    "High Score: " + highScore;
}
displayHighScore();


// Filter Questions
function filterQuestions() {
  const difficulty = document.querySelector("#difficulty").value;
  const category = document.querySelector("#category").value;

  filteredQuestions = quizData.filter(q =>
    (difficulty === "all" || q.difficulty === difficulty) &&
    (category === "all" || q.category === category)
  );
}


// Start Quiz
startBtn.addEventListener("click", () => {

  filterQuestions();

  if (!filteredQuestions.length) {
    alert("No questions available!");
    return;
  }

  startBtn.style.display = "none";
  container.style.display = "block";

  currentQuestion = 0;
  score = 0;

  loadQuestion();
});


// Load Question
function loadQuestion() {
  answered = false;

  const current = filteredQuestions[currentQuestion];

  questionEl.textContent = current.question;
  counterEl.textContent =
    `Question ${currentQuestion + 1}/${filteredQuestions.length}`;

  optionsEl.innerHTML = "";

  current.options.forEach((opt, i) => {
    const btn = document.createElement("button");

    btn.classList.add("option"); // IMPORTANT for CSS
    btn.textContent = opt;

    btn.addEventListener("click", () => selectOption(i));

    optionsEl.appendChild(btn);
  });

  nextBtn.style.display = "none";

  startTimer();
}


// Select Option
function selectOption(index) {

  if (answered) return;

  answered = true;
  clearInterval(timeInterval);

  const correct = filteredQuestions[currentQuestion].correct;
  const options = document.querySelectorAll(".option");

  if (index === correct) {
    options[index].classList.add("correct");
    score++;
  } else {
    options[index].classList.add("incorrect");
    options[correct].classList.add("correct");
  }

  nextBtn.style.display = "block";
}


// Timer
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

        const correct =
          filteredQuestions[currentQuestion].correct;

        document
          .querySelectorAll(".option")[correct]
          .classList.add("correct");

        nextBtn.style.display = "block";
      }
    }
  }, 1000);
}


// Next Button
nextBtn.addEventListener("click", () => {

  currentQuestion++;

  if (currentQuestion < filteredQuestions.length) {
    loadQuestion();
  } else {
    showResults();
  }
});


// Show Results
function showResults() {

  saveHighScore();

  container.innerHTML = `
    <div class="results">
      <h2>Quiz Complete!</h2>
      <p class="score">${score}/${filteredQuestions.length}</p>
      <button id="restartBtn">Restart Quiz</button>
    </div>
  `;

  document
    .querySelector("#restartBtn")
    .addEventListener("click", () => location.reload());
}


// Save High Score
function saveHighScore() {

  let highScore = localStorage.getItem("highScore") || 0;

  if (score > highScore) {
    localStorage.setItem("highScore", score);
    alert("New High Score!");
  }

  displayHighScore();
}
