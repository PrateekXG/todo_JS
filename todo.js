let todo=[];
let req=prompt("enter request");
while(true){
    if(req=="quit"){
        console.log("quitting app");
        break;
    }
    else if(req=="list"){
        console.log("---------------");
        for(let i=0;i<todo.length;i++){
             console.log(i,todo[i]);
        }
        console.log("---------------");
    }
    else if(req=="add"){
        let task=prompt("enter task");
        todo.push(task);
    }
    else if(req=="delete"){
        let idx=prompt("enter index of tasst tobe deleted");
        todo.splice(idx,1);
    }
    else {
        console.log("wrong entry!!");
    }
    req=prompt("enter request");
}