function getTodos() {
  var todos = []
  var todosStorage = localStorage.getItem('todo')
  if (todosStorage != null) {
    todos = JSON.parse(todosStorage)
  }
  return todos
}
