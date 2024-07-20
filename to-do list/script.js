// Loading the items from local storage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((task) => addTaskToDom(task));
}

// Saving tasks to the local storage

function saveTasks(tasks) {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Adding a task to the DOM

function addTaskToDom(task) {
  const taskList = document.getElementById("task-list");
  const li = document.createElement("li");

  li.textContent = task.text;
  if (task.completed) {
    li.classList.add("completed");
  }

  // Toggle Task completion
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    task.completed = !task.completed;
    updateLocalStorage();
  });

  taskList.appendChild(li);
}

// update the local storage

function updateLocalStorage() {
  const tasks = [];
  document.querySelectorAll("#task-list li").forEach((li) => {
    tasks.push({
      text: li.textContent,
      completed: li.classList.contains("completed"),
    });
  });

  saveTasks(tasks);
}

// Adding new Tasks

document.getElementById("add-task").addEventListener("click", () => {
  const newTaskInput = document.getElementById("new-task");
  const taskText = newTaskInput.value.trim();
  console.log("new tsk text:", taskText);
  if (taskText) {
    const task = { text: taskText, completed: false };
    console.log("new task object:", task);

    addTaskToDom(task);
    updateLocalStorage();
    newTaskInput.value = "";
  }
});

// Finally loading task to page load

window.addEventListener("DOMContentLoaded", loadTasks);
