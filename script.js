function updateClock(){

    const now = new Date();
    const hours = now.getHours().toString().padStart(2,"0");
    const minutes = now.getMinutes().toString().padStart(2,"0");
    const seconds = now.getSeconds().toString().padStart(2,"0");
    const timeString = `${hours}:${minutes}:${seconds}`;
    document.getElementById("clock").textContent=timeString;


    const options = {weekday: "long", year: "numeric", month: "long", day:"numeric"};
    const dateString = now.toLocaleDateString(undefined, options);

    document.getElementById("date").textContent= dateString;
}

updateClock();
setInterval(updateClock,1000);

const focusInput = document.getElementById("focus-input");

const savedFocus = localStorage.getItem("userFocus");
if(savedFocus) {
    focusInput.value = savedFocus;
}

focusInput.addEventListener("input", function(){
    localStorage.setItem("userFocus", focusInput.value);
});

const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

let tasks = JSON.parse(localStorage.getItem("savedTasks")) || [];

function saveAndRender(){
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
    renderTasks();
}

todoInput.addEventListener("keydown", function(event){
    if(event.key=== "Enter" && todoInput.value.trim() !== "") {
        const newTask = {
            text: todoInput.value.trim(),
            completed:false,
            id:Date.now()
        };
        tasks.push(newTask);
        todoInput.value="";
        saveAndRender()
    
    }
});

function toggleTask(id){
    tasks = tasks.map(task =>{
        if(task.id === id){
            return{ ...task, completed: !task.completed};
        }
        return task;
    });
    saveAndRender();
}

function deleteTask(id){
    tasks = tasks.filter(task => task.id !==id);
    saveAndRender();
}

function renderTasks(){
    todoList.innerHTML= "";
    const sortedTasks = [...tasks].sort((a,b) =>{
        if(a.completed === b.completed){
            return a.id - b.id;
        }
        return a.completed? 1: -1;
    });

    sortedTasks.forEach(task => {
        const li = document.createElement("li");
        const leftContent = document.createElement("div");
        leftContent.style.display = "flex";
        leftContent.style.alignItems = "center";
        leftContent.style.gap = "10px";

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.checked = task.completed;
        checkbox.style.cursor = "pointer";
        checkbox.addEventListener("change", () => toggleTask(task.id));

        const span = document.createElement("span");
        span.textContent = task.text;

        if(task.completed) {
            span.style.textDecoration = "line-through";
            span.style.color = "#888888";
        }

        leftContent.appendChild(checkbox);
        leftContent.appendChild(span);

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.className = "delete-btn";
        deleteBtn.addEventListener("click", () => deleteTask(task.id));

        li.appendChild(leftContent);
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    })
}

renderTasks();