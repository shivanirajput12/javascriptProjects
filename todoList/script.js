let todos = JSON.parse(localStorage.getItem("todos")) || []; 

const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoInput");
const todoList = document.querySelector("#todoList");

// ✅ Render on page load
renderTodos();

// Handle form submission
todoForm.addEventListener("submit", function(event){
  event.preventDefault();

  const taskText = todoInput.value.trim();
  if(taskText === "") return;

  addTodo(taskText);

  todoInput.value = "";
  todoInput.focus();
});

// Add todo to array
function addTodo(text) {
  todos.push({ text: text, completed: false });
  renderTodos();
}

// Render UI from array
function renderTodos() {
  todoList.innerHTML = "";

  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    li.setAttribute("data-index", index);
    li.setAttribute("draggable", "true");

    if (todo.completed) li.classList.add("completed");

    const span = document.createElement("span");
    span.textContent = todo.text;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = todo.completed ? "Undo" : "Complete";
    completeBtn.classList.add("complete-btn");

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.append(span, completeBtn, editBtn, deleteBtn);
    todoList.appendChild(li);
  });

  // ✅ Save to localStorage
  localStorage.setItem("todos", JSON.stringify(todos));
}

// Event Delegation
todoList.addEventListener("click", function(event){
  const target = event.target;
  const li = target.closest("li");
  if (!li) return;

  const index = li.dataset.index;

  if (target.classList.contains("complete-btn")) {
    todos[index].completed = !todos[index].completed;
    renderTodos();

  } else if (target.classList.contains("edit-btn")) {
    const newText = prompt("Edit your task:", todos[index].text);
    if (newText && newText.trim() !== "") {
      todos[index].text = newText.trim();
      renderTodos();
    }

  } else if (target.textContent === "Delete") {
    todos.splice(index, 1);
    renderTodos();
  }
});
