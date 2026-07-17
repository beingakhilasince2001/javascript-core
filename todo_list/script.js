const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");


// Load tasks when page opens
window.addEventListener("load", loadTasks);



function addTask(taskText = input.value, completed = false) {

    if (taskText.trim() === "") {
        return;
    }


    const li = document.createElement("li");
    li.classList.add("task");


    const span = document.createElement("span");
    span.textContent = taskText;


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.classList.add("delete-btn");


    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = completed;


    const left = document.createElement("div");
    left.classList.add("left");


    left.appendChild(checkbox);
    left.appendChild(span);


    li.appendChild(left);
    li.appendChild(deleteBtn);



    if(completed){
        span.classList.add("completed");
    }



    deleteBtn.addEventListener("click", function () {

        li.remove();

        saveTasks();

    });



    checkbox.addEventListener("change", function () {

        span.classList.toggle("completed");

        saveTasks();

    });



    taskList.appendChild(li);


    input.value = "";
    input.focus();


    saveTasks();

}




input.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {

        addTask();

    }

});




// Save tasks
function saveTasks() {

    const tasks = [];


    taskList.querySelectorAll(".task").forEach(function(li){


        const text = li.querySelector("span").textContent;

        const completed = li.querySelector("input").checked;


        tasks.push({
            text:text,
            completed:completed
        });


    });



    localStorage.setItem(
        "tasks",
        JSON.stringify(tasks)
    );

}





// Load tasks
function loadTasks() {

    const savedTasks = JSON.parse(
        localStorage.getItem("tasks")
    ) || [];


    savedTasks.forEach(function(task){

        addTask(
            task.text,
            task.completed
        );

    });

}