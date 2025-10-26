const inputField = document.getElementById("inputBox");
const mainListContainer = document.getElementById("actualListID");

// Allow adding tasks with Enter key
inputField.addEventListener("keypress", function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});

function addTask(){
    if (inputField.value.trim() === "") {
        alert("Cannot pass an empty task");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputField.value;
        mainListContainer.appendChild(li);

        let span = document.createElement("span");
        span.innerHTML = "\u00D7"; 
        li.appendChild(span);
        
    }
    inputField.value = "";
    saveItems();
}

mainListContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checkedItem");
        saveItems();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveItems();
    }
}, false);

function displayTasks() {
    mainListContainer.innerHTML = localStorage.getItem("data");
}

function saveItems() {
    localStorage.setItem("data", mainListContainer.innerHTML);
}
displayTasks();