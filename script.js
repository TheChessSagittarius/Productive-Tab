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

function renderTasks(){
    todoList.innerHTML = "";
    tasks.forEach((taskText, index) =>{
        const li = document.createElement("li");
        li.textContent=taskText;

        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = "x";
        deleteBtn.className = "delete-btn";

        deleteBtn.addEventListener("click", function(){
            tasks.splice(index, 1);
            saveAndRender();
        });
        li.appendChild(deleteBtn);
        todoList.appendChild(li);
    });
}

function saveAndRender(){
    localStorage.setItem("savedTasks", JSON.stringify(tasks));
    renderTasks();
}

todoInput.addEventListener("keydown", function(event){
    if(event.key=== "Enter" && todoInput.value.trim() !== "") {
        tasks.push(todoInput.value.trim());
        todoInput.value="";
        saveAndRender()
    
    }
});

renderTasks();