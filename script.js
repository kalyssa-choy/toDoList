const addButton = document.getElementById("addButton");
const list = document.getElementById("list");
const toDo = document.getElementById("toDo");
const all = document.getElementById("all");


//function for adding a task to the list
function addTask() {
    //assigned the user input to input
    let input = toDo.value;

    //if the user input is empty
    if (input === "") {
        return; // Don't add an empty task
    }

    //creating a div to hold the activity and 2 buttons
    var taskBlock = document.createElement("div");
    taskBlock.classList.add("task-block");

    //creating p element for the activity
    var task = document.createElement("p");
    task.classList.add("item-text");
    task.innerText = input;

    //creating remove button
    var remove = document.createElement("button");
    remove.innerText = "X";
    remove.classList.add("rButton");

    //creates finish button
    var finish = document.createElement("button");
    finish.innerText = "Finish";
    finish.classList.add("fButton");

    //puts all of the elements into the taskBlock div
    taskBlock.appendChild(task);
    taskBlock.appendChild(finish);
    taskBlock.appendChild(remove);

    list.appendChild(taskBlock);

    toDo.value = ""; // Clear the input field after adding a task
}


function checkClick(event){

    //what the user clicked on
    var clickElement = event.target;

    //checking for if user clicked the finish button
    if (clickElement.classList.contains("fButton")){
        const itemText = clickElement.parentElement.querySelector(".item-text");
        itemText.style.textDecoration = "line-through";
    }

    //checking for if user clicked the remove button
    if (clickElement.classList.contains("rButton")){
        const selectedBlock = clickElement.parentElement;
        selectedBlock.style.display = "none";
    }
}

//checking for if user clicked the add task button
addButton.addEventListener("click", addTask);

//checking for if user clicked buttons in to do list
all.addEventListener("click", checkClick);