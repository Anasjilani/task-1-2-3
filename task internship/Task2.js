document.addEventListener("DOMContentLoaded", function () {
    const taskInput = document.getElementById("taskInput");
    const addTaskBtn = document.getElementById("addTask");
    const taskList = document.getElementById("taskList");

    // Load tasks from local storage
    const tasks = JSON.parse(localStorage.getItem("tasks")) || [];

    // Function to display tasks
    function displayTasks() {
        taskList.innerHTML = "";
        for (let i = 0; i < tasks.length; i++) {
            const task = tasks[i];
            const li = document.createElement("li");
            li.innerHTML = `
                <span>${task}</span>
                <button class="deleteTask" data-index="${i}">Delete</button>
            `;
            taskList.appendChild(li);
        }
    }

    // Add task
    addTaskBtn.addEventListener("click", function () {
        const newTask = taskInput.value.trim();
        if (newTask !== "") {
            tasks.push(newTask);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            taskInput.value = "";
            displayTasks();
        }
    });

    // Delete task
    taskList.addEventListener("click", function (e) {
        if (e.target.classList.contains("deleteTask")) {
            const index = e.target.getAttribute("data-index");
            tasks.splice(index, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks));
            displayTasks();
        }
    });


    // Initial display of tasks
    displayTasks();
});