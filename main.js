const textTask = document.querySelector(".field")
const addHigh = document.querySelector(".addHigh")
const addLow = document.querySelector(".addLow")
const taskHigh = document.querySelector(".task-wrapper-high")
const taskLow = document.querySelector(".task-wrapper-low")

let tasksHigh
let tasksLow
let todoItemElems
!localStorage.tasksHigh ? tasksHigh = [] : tasksHigh = JSON.parse(localStorage.getItem('tasksHigh'))
!localStorage.tasksLow ? tasksLow = [] : tasksLow = JSON.parse(localStorage.getItem('tasksLow'))

function Task(description) {
  this.description = description
  this.completed = false
}

const createTemplate = (task, index) => {
  return `
  <div class="task ${task.completed ? `checked` : ""}">
    <input onclick="completedTask(${index}, tasksHigh) completedTask(${index}, tasksLow)" type="checkbox" ${task.completed ? `checked` : ''}>
    <p>${task.description}</p>
    <span onclick="deleteTask(${index})" class="delete"></span>
  </div>
  `
}

const fillHtmlList = (value, tasks) => {
  value.innerHTML = ""
  if (tasks.length > 0) {
    tasks.forEach((item, index) => {
      value.innerHTML += createTemplate(item, index)
    });
    todoItemElems = document.querySelectorAll(".task")
  }
}
fillHtmlList(taskHigh, tasksHigh)
fillHtmlList(taskLow, tasksLow)

function updateLocal() {
  localStorage.setItem('tasksHigh', JSON.stringify(tasksHigh))
  localStorage.setItem('tasksLow', JSON.stringify(tasksLow))
}

const completedTask = (index, tasks) => {
  tasks[index].completed = !tasks[index].completed
  if (tasks[index].completed) {
    todoItemElems[index].classList.toggle('checked')
  }
  updateLocal()
  fillHtmlList(taskHigh)
  fillHtmlList(taskLow)
}

const deleteTask = index => {
  tasks.splice(index, 1)
  updateLocal()
  fillHtmlList(taskHigh)
  fillHtmlList(taskLow)
}

addHigh.addEventListener("click", () => {
  tasksHigh.push(new Task(textTask.value))
  updateLocal()
  fillHtmlList(taskHigh)
  textTask.value = ""
})
addLow.addEventListener("click", () => {
  tasksLow.push(new Task(textTask.value))
  updateLocal()
  fillHtmlList(taskLow)
  textTask.value = ""
})
