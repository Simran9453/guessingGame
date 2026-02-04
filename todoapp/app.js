let todo=[];
let req = prompt("Enter your request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    else if(req=="list"){
        console.log("--------------------------");
        for(task of todo){
            console.log(task);
        }
        console.log("--------------------------");
    }
    else if(req=="add"){
        let newTask = prompt("Enter the task");
        todo.push(newTask);
    }
    else if(req=="delete"){
        let idx = prompt("Enter the task number you wish to delete");
        todo.splice(idx,1);
    }
    req = prompt("Enter your request");
}