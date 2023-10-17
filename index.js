let data = [];

function addElt(){
    document.getElementById("showTask").innerHTML = "";
    const showElts = document.getElementById("showTask");
    data.forEach((element,i) => {
        let taskList = document.createElement("div")
        taskList.setAttribute("class", "taskContainer");
        let checkTask = document.createElement("button");
        checkTask.setAttribute("class","checkButtons");
        let editTask = document.createElement("button");
        editTask.setAttribute("class", "editButtons");
        showElts.appendChild(taskList);
        taskList.innerText = "Task " + (i+1) + ": " + element;
        checkTask.innerText = "Check Off";
        editTask.innerText = "Edit Task"
        taskList.appendChild(checkTask);
        taskList.appendChild(editTask);
        checkTask.onclick = () => deleteTask(i);
        editTask.onclick = () => editElt(i);
    });
}

function addTask(){
    let newUserInput = prompt("Enter Task:");
    newUserInput != "" && data.push(newUserInput); // The first part is the if condition, and if the condition is true, the command after && will run 
    console.log(data);
    addElt();
}

function deleteTask(i){
    data.splice(i,1);
    addElt();
}

function editElt(i){
    let editUserInput = prompt("Eenter New Task:");
    editUserInput != "" && (data[i] = editUserInput);
    addElt();
}