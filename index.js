let data = [];

function addElt(){
    document.getElementById("showTask").innerHTML = "";
    const showElts = document.getElementById("showTask");
    console.log(data.sort(function(a, b){return a.date.split("")[0] - b.date.split("")[0]}))
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
        taskList.innerText = "Task " + (i+1) + ": " + element.task;
        checkTask.innerText = "Check Off";
        editTask.innerText = "Edit Task"
        editDate.innerText = "Due: " + element.date;
        taskList.appendChild(checkTask);
        taskList.appendChild(editTask);
        taskList.appendChild(editDate);
        checkTask.onclick = () => deleteTask(i);
        editTask.onclick = () => editElt(element, i);
        editDate.onclick = () => changeDate(element, i);
    });
}

function addTask(){
    let tempObj = [{task:"", date:""}]
    let newUiTask = prompt("Enter Task:");
    if(newUiTask != "") tempObj.task = newUiTask;
    let newUiDate = prompt("Enter Due Date(Month/Date Ex:5/18):");
    if(newUiDate != "") tempObj.date = newUiDate;
    data.push(tempObj);
    console.log(data);
    addElt();
}

function deleteTask(i){
    data.splice(i,1);
    addElt();
}
function changeDate(element, i){
    let uiNewDate = prompt("Enter New Date:");
    uiNewDate != "" && (element.date = uiNewDate);
    addElt();
}

function editElt(element, i){
    let editUi = prompt("Eenter New Task:");
    editUi != "" && (element.task = editUi);
    addElt();
}