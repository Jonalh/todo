function clearField(input,val) {
      if(input.value == val)
         input.value="";
};

function myFunction() {
  let todo = document.getElementById("todo").value;
  if (todo != "") {
    let listSpan = document.createElement("SPAN");
    let textNode = document.createElement("LI");
    let completeBtn = document.createElement("BUTTON");
    let deleteBtn = document.createElement("BUTTON");
    let isCompleted = false;
    completeBtn.setAttribute("id", "completeBtn");
    deleteBtn.setAttribute("id", "deleteBtn");
    completeBtn.innerHTML="<i class='fas fa-check'></i>";
    deleteBtn.innerHTML="<i class='fas fa-trash'></i>";
    textNode.innerHTML=todo;
    let todoList = document.getElementById("todoList");
    listSpan.prepend(textNode, completeBtn, deleteBtn);
    todoList.appendChild(listSpan);
    let todoInput = document.getElementById("todo");
    clearField(todoInput, todo);
    
    completeBtn.addEventListener("click", function(){
      isCompleted = !isCompleted;
      if (isCompleted) {
        listSpan.style.backgroundColor =  "#aaf683";
        textNode.style.color = "white";
        completeBtn.innerHTML="<i class='fas fa-times'></i>";
      } else {
        listSpan.style.backgroundColor =  "#ebebeb";
        textNode.style.color = "#202020";
        completeBtn.innerHTML="<i class='fas fa-check'></i>";
      }
    });
    
    deleteBtn.addEventListener("click", function(){
      listSpan.remove();
    });
  } else {
    
  }
}


let todo = document.getElementById("todo");
todo.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});