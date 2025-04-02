let ul = document.querySelector("ul");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click",function(){
    let task = document.createElement("li");
    task.innerText = input.value;
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";
    deleteButton.classList.add("delete");
    task.appendChild(deleteButton);
    ul.appendChild(task);
    input.value="";
})

ul.addEventListener("click", function(event){
    if(event.target.nodeName == "BUTTON"){
        let item = event.target.parentElement;
        item.remove();
    }
});