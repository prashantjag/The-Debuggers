const todoList = document.getElementById('todoList');
const todoListBtn = document.getElementById('todoListBtn');
const closeListBtn = document.getElementById('closeListBtn');
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// Show the To-Do List
todoListBtn.addEventListener('click', () => {
  todoList.classList.add('open');
});

// Hide the To-Do List
closeListBtn.addEventListener('click', () => {
  todoList.classList.remove('open');
});

// Add a new task
addTaskBtn.addEventListener('click', () => {
  const taskText = taskInput.value.trim();
  if (taskText === '') return;

  const listItem = document.createElement('li');

  const taskTextNode = document.createElement('span');
  taskTextNode.textContent = taskText;

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.addEventListener('click', () => {
    const newText = prompt('Edit Task:', taskTextNode.textContent);
    if (newText) taskTextNode.textContent = newText;
  });

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.addEventListener('click', () => listItem.remove());

  const completeBtn = document.createElement('button');
  completeBtn.textContent = 'Complete';
  completeBtn.addEventListener('click', () => {
    listItem.classList.toggle('completed');
  });

  listItem.append(taskTextNode, editBtn, completeBtn, deleteBtn);
  taskList.appendChild(listItem);
  taskInput.value = '';
});
