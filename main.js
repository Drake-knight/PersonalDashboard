let addToDoButton = document.getElementById('add-task-btn');
let toDoContainer = document.getElementById('task-list');
let inputField = document.getElementById('task-input');



addToDoButton.addEventListener('click', function(){
    var taskItem = document.createElement('li');
  //  taskItem.classList.add(class name) here i can add class
    taskItem.innerText = inputField.value;
    toDoContainer.appendChild(taskItem);



    inputField.value = '';


    taskItem.addEventListener('click', function(){
      taskItem.style.textDecoration = "line-through";})
 
    
      
    taskItem.addEventListener('dblclick', function(){
        toDoContainer.removeChild(taskItem);
    })
   


})
