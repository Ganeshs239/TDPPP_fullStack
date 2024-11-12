document.addEventListener("DOMContentLoaded", () => {
  const todoInput = document.getElementById("todo-input");
  const addButton = document.getElementById("add-button");
  const todoList = document.getElementById("todo-list");

  // Add new task to the list
  addButton.addEventListener("click", () => {
    const taskText = todoInput.value.trim();
    if (taskText) {
      addTask(taskText);
      todoInput.value = ""; // Clear input field
    }
  });

  // Function to create a new task item
  function addTask(taskText) {
    const listItem = document.createElement("li");

    const taskContent = document.createElement("span");
    taskContent.textContent = taskText;
    taskContent.addEventListener("click", () => {
      listItem.classList.toggle("completed"); // Toggle completion
    });

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoList.removeChild(listItem); // Remove task
    });

    listItem.appendChild(taskContent);
    listItem.appendChild(deleteButton);
    todoList.appendChild(listItem);
  }
});