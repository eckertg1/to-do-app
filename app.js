function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');
  const clearToDoForm = document.getElementById('clearToDoForm');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    // get the text
    let title = newToDoText.value;

    // create a new li
    let newLi = document.createElement('li');

    // create a new input
    let checkbox = document.createElement('input');

    // set the input's type to checkbox
    checkbox.type = "checkbox";

    // set the title
    newLi.textContent = title;

    // attach the checkbox to the li
    newLi.appendChild(checkbox);

    // attach the li to the ul
    toDoList.appendChild(newLi);

    //empty the input
    newToDoText.value = '';
  });

  clearToDoForm.addEventListener('submit', () => {

    event.preventDefault();

    for (var i = 0; i < toDoList.children.length; i++){
      console.log(i);
      var currentList = toDoList.children;
      var li = currentList[i];
      console.log(li.children.length);
      var checkbox = li.childNodes[1];
      console.log(checkbox.checked);
      if (checkbox.checked === true){
        toDoList.removeChild(currentList[i]);
        i--
      }
    }
  });
}

window.onload = function() {
   onReady();
 };
