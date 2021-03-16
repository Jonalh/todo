let todo = document.getElementById("todo");
let todoInput = document.getElementById("todo");
let todoList = document.getElementById("todoList");
let isDark = false;
let darkMode = document.getElementById("darkMode");
let container = document.getElementsByClassName("container")[0];
let title = document.getElementsByTagName("H1")[0];
let addBtn = document.getElementById("myBtn");

function clearField(input,val) {
      if(input.value == val)
         input.value="";
};

function myFunction() {
  let todo = document.getElementById("todo").value;
  if (todo != "") {
    let listSpan = document.createElement("SPAN");
    listSpan.className = "elementList";
    let textNode = document.createElement("LI");
    let completeBtn = document.createElement("BUTTON");
    let deleteBtn = document.createElement("BUTTON");
    let isCompleted = false;
    textNode.className = "listElement";
    completeBtn.setAttribute("id", "completeBtn");
    completeBtn.className = "completeBtn";
    deleteBtn.setAttribute("id", "deleteBtn");
    deleteBtn.className = "deleteBtn";
    completeBtn.innerHTML="<i class='fas fa-check'></i>";
    deleteBtn.innerHTML="<i class='fas fa-trash'></i>";
    textNode.innerHTML=todo;
    listSpan.prepend(textNode, completeBtn, deleteBtn);
    todoList.appendChild(listSpan);
    clearField(todoInput, todo);
    if (isDark) {
      listSpan.style.backgroundColor = "#616161";
      completeBtn.style.backgroundColor = "#00897b";
      deleteBtn.style.backgroundColor = "#c62828";
      textNode.style.color = "#ffffff";
    }
    
    completeBtn.addEventListener("click", function(){
      isCompleted = !isCompleted;
      if (isCompleted && !isDark) {
        listSpan.style.backgroundColor = "#aaf683";
        textNode.style.color = "white";
        completeBtn.innerHTML="<i class='fas fa-times'></i>";
      } else if (isCompleted && isDark) {
        listSpan.style.backgroundColor = "#00897b";
        completeBtn.innerHTML="<i class='fas fa-times'></i>";
      } else if (!isCompleted && isDark) {
        listSpan.style.backgroundColor = "#616161";
        completeBtn.innerHTML="<i class='fas fa-check'></i>";
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

todo.addEventListener("keyup", function(event) {
  if (event.keyCode === 13) {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

darkMode.addEventListener("click", function(){
  isDark = !isDark;
  if (isDark) {
    container.style.backgroundColor = "#212121";
    darkMode.style.backgroundColor = "#ffffff";
    darkMode.style.color = "#212121";
    darkMode.innerHTML = "<i class='fas fa-sun' style='color:#212121'></i>"
    title.style.color = "#ffffff";
    todoInput.style.backgroundColor = "#424242";
    todoInput.style.color = "#ffffff";
    todoInput.style.border = "none";
    addBtn.style.backgroundColor = "#00897b";
    let elements = document.getElementsByClassName("elementList");
    let listElement = document.getElementsByClassName("listElement");
    let completeBtn = document.getElementsByClassName("completeBtn");
    let deleteBtn = document.getElementsByClassName("deleteBtn");
    for (var i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#616161";
    }
    for (var i=0; i<listElement.length; i++) {
        listElement[i].style.color = "#ffffff";
    }
    for (var i=0; i<completeBtn.length; i++) {
        completeBtn[i].style.backgroundColor = "#00897b";
    }
    for (var i=0; i<deleteBtn.length; i++) {
        deleteBtn[i].style.backgroundColor = "#c62828";
    };
  } else {
    container.style.backgroundColor = "#ffffff";
    darkMode.style.backgroundColor = "#212121";
    darkMode.innerHTML = "<i class='fas fa-moon'></i>"
    title.style.color = "#202020";
    todoInput.style.backgroundColor = "#ffffff";
    todoInput.style.color = "#202020";
    todoInput.style.border = "1px solid #EBEBEB";
    addBtn.style.backgroundColor = "#aaf683";
    let elements = document.getElementsByClassName("elementList");
    let listElement = document.getElementsByClassName("listElement");
    let completeBtn = document.getElementsByClassName("completeBtn");
    let deleteBtn = document.getElementsByClassName("deleteBtn");
    for (var i=0; i<elements.length; i++) {
        elements[i].style.backgroundColor = "#ebebeb";
    }
    for (var i=0; i<listElement.length; i++) {
        listElement[i].style.color = "#202020";
    }
    for (var i=0; i<completeBtn.length; i++) {
        completeBtn[i].style.backgroundColor = "#aaf683";
    }
    for (var i=0; i<deleteBtn.length; i++) {
        deleteBtn[i].style.backgroundColor = "#ee6055";
    }
  }
});