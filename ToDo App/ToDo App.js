let add = document.getElementById("add");
let text = document.getElementById("text");
let itemsContainer = document.querySelector(".items");
let tasks = [];

window.onload = function() {
    if(localStorage.getItem('tasks')) {
        tasks = JSON.parse(localStorage.getItem('tasks'));
        renderTasks();
    }
};

function renderTasks() {
    itemsContainer.innerHTML = "";
    tasks.forEach(function(taskText) {
        let newItem = document.createElement("div");
        newItem.classList.add("content");

        let checkbox = document.createElement("input");
        checkbox.setAttribute("type", "checkbox");
        checkbox.classList.add("regular-radio");
        newItem.appendChild(checkbox);

        let task = document.createElement("p");
        task.classList.add("item");
        task.textContent = taskText;
        newItem.appendChild(task);

        itemsContainer.appendChild(newItem);
    });
}

add.onclick = function () {
    let inputValue = text.value.trim();
    
    if (inputValue === "") {
        return;
    }

    tasks.push(inputValue);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    renderTasks();

    text.value = "";
};

let deleteButton = document.getElementById("delete");

deleteButton.onclick = function () {
    let checkboxes = document.querySelectorAll('.regular-radio:checked');
    checkboxes.forEach(function (checkbox) {
        let index = Array.from(checkbox.closest('.items').children).indexOf(checkbox.closest('.content'));
        tasks.splice(index, 1);
        localStorage.setItem('tasks', JSON.stringify(tasks));
        checkbox.closest('.content').remove();
    });
};
