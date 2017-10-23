function onReady() {
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo(){
    const newToDoText = document.getElementById('newToDoText');
//I changed the if statement because !newToDoText didn't seem to be working
//with regards to catching empty to-do entries.
    if (newToDoText.value === '') { return }

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    const todoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo){
        const newLi = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';

        newLi.textContent = toDo.title;

        todoList.appendChild(newLi);
        newLi.appendChild(checkbox);
    });

  }

  addToDoForm.addEventListener('submit', event => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
   onReady();
 };
