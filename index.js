let data = [];
let date = [];

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
        let editDate = document.createElement("button");
        editDate.setAttribute("class", "dateButton");
        showElts.appendChild(taskList);
        taskList.innerText = "Task " + (i+1) + ": " + element;
        checkTask.innerText = "Check Off";
        editTask.innerText = "Edit Task"
        editDate.innerText = "Due: " + date[i];
        taskList.appendChild(checkTask);
        taskList.appendChild(editTask);
        taskList.appendChild(editDate);
        checkTask.onclick = () => deleteTask(i);
        editTask.onclick = () => editElt(i);
        editDate.onclick = () => changeDate(i);
    });
}

function addTask(){
    let newUiTask = prompt("Enter Task:");
    newUiTask != "" && data.push(newUiTask)
    let newUiDate = prompt("Enter Due Date:");
    date.push(newUiDate);
    console.log(data);
    console.log(date);
    addElt();
}

function deleteTask(i){
    data.splice(i,1);
    date.splice(i,1);
    addElt();
}
function changeDate(i){
    let uiNewDate = prompt("Enter New Date:");
    uiNewDate != "" && (date[i] = uiNewDate);
    addElt();
}

function editElt(i){
    let editUi = prompt("Eenter New Task:");
    editUi != "" && (data[i] = editUi);
    addElt();
}