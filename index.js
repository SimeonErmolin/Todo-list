import {ADD_TASK} from './view.js'
const createTemplate = (task) => {
  return `
    <div class="task">
      <input type="checkbox" class="checkbox-input">
      <p class="text">${task}</p>
      <span class="delete-block delete"></span>
    </div>
  `
}
function createTask(index) {
  event.preventDefault()
  const textTask = document.querySelectorAll('.field')[index];
  const wrapper = document.querySelectorAll('.wrapper')[index];
  if (textTask.value == '') return;
  wrapper.innerHTML += createTemplate(textTask.value)
  let deleteBtn = document.querySelectorAll('.delete');
  let toggleBtn = document.querySelectorAll('.checkbox-input')
  let tasks = document.querySelectorAll('.task');
  deleteBtn.forEach((item, index) => {
      item.addEventListener('click', () => deleteTask(index));
    })
  function deleteTask(index) {
    tasks[index].remove()
  }
  toggleBtn.forEach((item, index) => {
      item.addEventListener('click', () => toggleChecked(item, index));
    })
  function toggleChecked(item, index) {
    if (item.checked) {
      tasks[index].classList.add('checked')
    } else {
      tasks[index].classList.remove('checked')
    }
  }
  textTask.value = ''
}
ADD_TASK.forEach(function (item, index) {
  item.addEventListener('click', () => createTask(index))
})
