const todoInput = document.querySelector('.todo-input')
const submitBtn = document.querySelector('.btn')
const fullList = document.querySelector('.todo-list')


fullList.addEventListener("click", deleteCheck);



submitBtn.addEventListener('click', (event)=>{
    event.preventDefault();
    

    
    const todoDiv = document.createElement('div')
    todoDiv.classList.add('todo')
    const newtodo = document.createElement('li')
    newtodo.innerText = todoInput.value
    newtodo.classList.add('todo-item')

    todoDiv.appendChild(newtodo)

    const completeBtn = document.createElement('button')
    completeBtn.innerHTML = '<i class="fas fa-solid fa-check"></i>'
    completeBtn.classList.add('complete-btn')
    todoDiv.appendChild(completeBtn)
    const deleteBtn = document.createElement('button')
    deleteBtn.innerHTML = '<i class="fas fa-solid fa-trash"></i>'
    deleteBtn.classList.add('delete-btn')

    todoDiv.appendChild(deleteBtn)

    fullList.appendChild(todoDiv)

    todoInput.value =""

    
  
    
})

function deleteCheck (e) {
    const item = e.target;

    if(item.classList [0] === 'delete-btn') {
        const todo = item.parentElement;
        
        todo.remove ();

       
        
    }

    
   
        
    if (item.classList[0] === "complete-btn") {
        const todo = item.parentElement;
        todo.style.textDecoration = "line-through"
    }

       
        
    }

  

   




