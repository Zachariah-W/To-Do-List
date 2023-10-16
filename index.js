let count = 0;
let data = [50];

function addTask(){
    let userInput = prompt("Enter Task:");
    if(userInput != null){
        console.log(userInput);
        data[count] = userInput;
        count ++;
    };
    console.log(data)
    let showElts = document.getElementById("showTask");
    let taskList = document.createElement("div")
    taskList.setAttribute("class", "taskContainer");
    let checkTask = document.createElement("button");
    checkTask.setAttribute("class","checkButtons");
    showElts.appendChild(taskList);
    taskList.innerText = "- " + data[count - 1];
    checkTask.innerText = "Click to check off";
    taskList.appendChild(checkTask);
}