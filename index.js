function getTodos() {
  var todos = []
  var todosStorage = localStorage.getItem('todo')
  if (todosStorage != null) {
    todos = JSON.parse(todosStorage)
  }
  return todos
}

function add() {
  var task = document.getElementById('task').value

  var todos = getTodos()
  todos.push(task)
  localStorage.setItem('todo', JSON.stringify(todos))

  show()

  return false
}
