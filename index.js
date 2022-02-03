import { UI } from './view.js';

const createTemplate = (task) => {
  return `
    <div class="task">
      <input type="checkbox" class="checkbox-input">
      <p class="text">${task}</p>
      <span class="delete-block delete"></span>
    </div>
  `
}

UI.ADD_TASK.forEach(function (item, index) {
  item.addEventListener('click', () => createTask(index));
})

function createTask(index) {
  event.preventDefault();

  if (UI.INPUT[index].value == '') return;

  UI.WRAPPER[index].innerHTML += createTemplate(UI.INPUT[index].value);
  UI.FORM[index].reset();
  tasksHandler();
}

function tasksHandler() {
  const deleteBtn = document.querySelectorAll('.delete');
  const toggleBtn = document.querySelectorAll('.checkbox-input');
  const tasks = document.querySelectorAll('.task');

  deleteBtn.forEach((item, index) => {
    item.addEventListener('click', () => deleteTask(index));
  })
  function deleteTask(index) {
    tasks[index].remove();
  }

  toggleBtn.forEach((item, index) => {
    item.addEventListener('click', () => toggleChecked(item, index));
  })
  function toggleChecked(item, index) {
    if (item.checked) {
      tasks[index].classList.add('checked');
      return;
    }
    tasks[index].classList.remove('checked');
  }
}
tasksHandler()
