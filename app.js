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
    search('To Do')
    console.log('In Progress:')
    search('In Progress')
    console.log('Done:')
    search('Done')
  }
  if (value == 'priority') {
    console.log('high:')
    search('high')
    console.log('low:')
    search('low')
  }
};
function search(value) {
  list.forEach(element => {
    if (element.status == value) {
      console.log(element)
    }
    if (element.priority == value) {
      console.log(element)
    }
  })
}

changeStatus("write a post", "Done")
deleteTask("make a bad")
addTask("have a walk", "To Do", "high")
addTask("game", "To Do", "high")
showBy('priority')
showBy('status')
