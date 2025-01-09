import fs from "fs";

let command = process.argv[2];
let task = process.argv.slice(3).join(' ');

switch (command){
    case "add":
        addTask(task);
        break;
    case "remove":
        removeTask(parseInt(task));
        break;
    case "list":
        listTasks();
        break;
    
}

function addTask(task){
    fs.appendFileSync("todo.txt", ` ${task}\n`);
    console.log(`Task ${task} added.`);
}
function listTasks(){
    let list = fs.readFileSync("todo.txt","utf-8").trim().split("\n");
    let tasks = list;
    tasks.forEach((task, index) => {
    console.log(`${index + 1}. ${task}`);
    });
}

function removeTask(task){
    let data = fs.readFileSync("todo.txt", "utf-8").trim().split("\n");
    data.splice(task - 1, 1); 
    fs.writeFileSync("todo.txt", data.join("\n"));
    console.log(`Task ${task} removed.`);
}