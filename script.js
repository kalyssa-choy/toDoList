const addButton = document.getElementById("addButton");
const list = document.getElementsByClassName("list"); 
const toDo = document.getElementById("toDo");

//add task funciton creates a div, a 'p' element, and 2 buttons
function addTask(){
    let input = toDo.value;

    // if(input === ""){
    //     return;
    // }

    //if(input.length > 0){
        var taskBlock = document.createElement("div");
        taskBlock.classList.add("task-block");

        var task = document.createElement("p");
        task.innerText = input;
        var remove = document.createElement("button");
        remove.innerText = "X";
        var finish = document.createElement("button");
        finish.innerText = "Finish";
        
        taskBlock.appendChild(task);
        taskBlock.appendChild(finish);
        taskBlock.appendChild(remove);

        list.appendChild(taskBlock);
    //} 
    //else{
        //toDo.innerText = "Can't submit an empty task. Enter your to do task here.";
       //return;
    //}
}

// //prompting user to add to do
// toDo.value.innerText = "To Do...";
// toDo.addEventListener("click", toDo.value.innerText = "");

//adding a task
addButton.addEventListener("click", addTask);