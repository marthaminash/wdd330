const todoInput = document.querySelector(".todo-app-input");
const todoBtn = document.querySelector(".todo-app-btn");
const todoList = document.querySelector(".todo-app-list");
const filterOption = document.querySelector(".filter-todo");

todoBtn.addEventListener("click", addTask);
todoList.addEventListener("click", taskAction);
filterOption.addEventListener("click", filterTodo);

function addTask(event) {
  event.preventDefault();

  const taskSection = document.createElement("div");
  taskSection.classList.add("todo-task");

  const task = document.createElement("li");
  task.innerText = todoInput.value;

  task.classList.add("task");
  taskSection.appendChild(task);

  let inputValue = todoInput.value;

  saveLocalTasks(todoInput.value);

  const doneBtn = document.createElement("button");
  doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>';
  doneBtn.classList.add("done-btn");
  taskSection.appendChild(doneBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';
  deleteBtn.classList.add("delete-btn");
  taskSection.appendChild(deleteBtn);

  todoList.appendChild(taskSection);

  todoInput.value = "";
}

function taskAction(event) {
  const action = event.target;
  console.log(action);

  if (action.classList[0] === "delete-btn") {
    // console.log("Delete");
    const todoItem = action.parentElement;
    todoItem.remove();
  }

  if (action.classList[0] === "done-btn") {
    // console.log("Done");
    const todo = action.parentElement;
    todo.classList.toggle("done");
  }
}

function saveLocalTasks(todo) {
  console.log(todo);
  localStorage.setItem("todo", todo);
}
