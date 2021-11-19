const list = [
  {
    name: "create a task",
    status: "In Progress",
    priority: "low",
  },
  {
    name: "make a bad",
    status: "Done",
    priority: "high",
  },
  {
    name: "write a post",
    status: "To Do",
    priority: "low",
  },
]
function changeStatus(name, status) {
  let indList = list.findIndex(item => item.name == name);
  list[indList].status = status;
}
function deleteTask(name) {
  let indList = list.findIndex(item => item.name == name);
  delete list[indList];
}
function addTask(name, status = '', priority = '') {
  list.push({
    name: name,
    status: status,
    priority: priority,
  })
}
function showBy(value) {
  if (value == 'status') {
    console.log('To Do:')
    searchStatus('To Do')
    console.log('In Progress:')
    searchStatus('In Progress')
    console.log('Done:')
    searchStatus('Done')
  }
  if (value == 'priority') {
    console.log('high:')
    searchPriority('high')
    console.log('low:')
    searchPriority('low')
  }
};
function searchStatus(status) {
  list.forEach(element => {
    if (element.status == status) {
      console.log(element)
    }
  })
}
function searchPriority(priority) {
  list.forEach(element => {
    if (element.priority == priority) {
      console.log(element)
    }
  })
}

changeStatus("write a post", "Done")
deleteTask("make a bad")
addTask("have a walk", "To Do", "high")
addTask("game", "To Do", "high")
showBy('priority')
