document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.getElementById('create-task-form')
  const todoWrapper = document.getElementById('tasks')

  form.addEventListener('submit', (e) => {
    e.preventDefault()
    const text = document.getElementById('new-task-description').value
    const todo = document.createElement('li')
    todo.innerHTML = text
    todoWrapper.appendChild(todo)
  })

});
