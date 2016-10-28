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

function show() {
  var todos = getTodos()

  var html = '<ul>'
  for(var i=0; i<todos.length; i++) {
    html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button></li>'
  }
  html += '</ul>'

  documsnt.getElementById('todos').innerHTML = html

  var buttons = document.getElementsByClassName('remove')
  for (var i=0; i<butons.length; i++) {
    buttons[i].addEventListener('click', remove)
  }
}

function remove() {
  var id = this.gerAttribute('id')
  var todos = getTodos
  todos.splice(id, 1)
  localStorage.setItem('todo', JSON.stringify(todos))

  show()

  return false
}

document.getElementById('add').addEventListener('click', add)
show()
