let globalId=1;
function todo()
{  
    let task_val=document.getElementById("Task").value;
    let des_val=document.getElementById("description").value;
    let parent=document.getElementById("container");
    parent.appendChild(createchilds(task_val,des_val,globalId));
    globalId=globalId+1;

}

function createchilds(task,descriptions,id)
{
    let child =document.createElement("div");
    let first_child=document.createElement("div");
    first_child.innerHTML=task;
    // let second_child=document.getElementById("");
    let second_child=document.createElement("div");
    second_child.innerHTML=descriptions;
    let third_child=document.createElement("button");
    third_child.innerHTML="Mark As Done"; 
    third_child.setAttribute("onclick",`done(${id})`);
    third_child.setAttribute("style","color:white;background-color:blue");
    child.append(first_child);
    child.append(second_child);
    child.append(third_child);
    child.setAttribute("id",id);
    return child;
}
function done(id)
{
    let abc=document.getElementById(id);
    abc.remove();
}