let tasks = [];

function createTaskElement(task) {
    const taskEl = document.createElement('div');
    taskEl.className = `task ${task.priority}`;
    taskEl.draggable = true;
    taskEl.dataset.id = task.id;

    const prioClass = task.priority === 'high' ? 'high' :
                     task.priority === 'medium' ? 'medium' : 'low';

    taskEl.innerHTML = `
        <div class="priority ${prioClass}">${task.priority.toUpperCase()}</div>
        <div class="task-title">${task.title}</div>
        <div class="task-desc">${task.description || ''}</div>
    `;

    taskEl.addEventListener('dragstart', e => {
        e.dataTransfer.setData('text/plain', task.id);
        taskEl.classList.add('dragging');
    });

    taskEl.addEventListener('dragend', () => taskEl.classList.remove('dragging'));

    return taskEl;
}
function renderTasks() {
    ['todo', 'inprogress', 'done'].forEach(status => {
        const container = document.getElementById(status + '-list');
        container.innerHTML = '';

        const columnTasks = tasks.filter(t => t.status === status);
        columnTasks.forEach(task => {
            container.appendChild(createTaskElement(task));
        });
    });

    updateTaskCounts();
}

function updateTaskCounts() {
    document.getElementById('todo-count').textContent = tasks.filter(t => t.status === 'todo').length;
    document.getElementById('inprogress-count').textContent = tasks.filter(t => t.status === 'inprogress').length;
    document.getElementById('done-count').textContent = tasks.filter(t => t.status === 'done').length;
}

function allowDrop(ev) {
    ev.preventDefault();
    let column = ev.currentTarget.closest('.column');
    if (column) column.classList.add('drag-over');
}

function drop(ev) {
    ev.preventDefault();

    const taskId = ev.dataTransfer.getData('text/plain');
    const task = tasks.find(t => t.id === taskId);
    if (!task) return;

    let column = ev.currentTarget.closest('.column');
    if (!column) return;

    const newStatus = column.id.replace('-column', '');
    task.status = newStatus;

    renderTasks();

    document.querySelectorAll('.column').forEach(c => c.classList.remove('drag-over'));
}

let currentColumn = 'todo';

function showAddTaskModal(column) {
    currentColumn = column;
    document.getElementById('task-modal').style.display = 'flex';
    document.getElementById('task-title').focus();
}

function hideModal() {
    document.getElementById('task-modal').style.display = 'none';
    document.getElementById('task-title').value = '';
    document.getElementById('task-desc').value = '';
}

function addNewTask() {
    const title = document.getElementById('task-title').value.trim();
    if (!title) {
        alert("Task title cannot be empty!");
        return;
    }

    const description = document.getElementById('task-desc').value.trim();
    const priority = document.getElementById('task-priority').value;

    const newTask = {
        id: 'task-' + Date.now(),
        title: title,
        description: description,
        priority: priority,
        status: currentColumn
    };

    tasks.push(newTask);
    renderTasks();
    hideModal();
}

function init() {
    tasks = [
        { id: 't1', title: 'Research user personas', description: 'Identify the top 3 target user groups and their core pain-points.', priority: 'high', status: 'todo' },
        { id: 't2', title: 'Design wireframes', description: 'Create low-fidelity mockups for the dashboard, login, and profile screens.', priority: 'medium', status: 'todo' },
        { id: 't3', title: 'Set up project repo', description: 'Initialise Git, add .gitignore, and invite team members as collaborators.', priority: 'low', status: 'inprogress' },
        { id: 't4', title: 'Define tech stack', description: 'Agree on frontend framework, styling approach, and CI/CD pipeline.', priority: 'high', status: 'inprogress' },
        { id: 't5', title: 'Write project proposal', description: 'One-page executive summary covering goals, timeline, and budget.', priority: 'medium', status: 'done' }
    ];

    renderTasks();

    const username = document.getElementById('username').textContent.trim();
    const firstLetter = username.charAt(0).toUpperCase();
    document.getElementById('profile-icon').textContent = firstLetter;

    document.querySelectorAll('.column').forEach(column => {
        column.addEventListener('dragover', allowDrop);
        column.addEventListener('drop', drop);
        column.addEventListener('dragleave', () => column.classList.remove('drag-over'));
    });

    document.getElementById('add-task-btn').addEventListener('click', () => showAddTaskModal('todo'));
    document.getElementById('add-task-confirm').addEventListener('click', addNewTask);
    document.getElementById('cancel-task').addEventListener('click', hideModal);

    document.getElementById('logout-btn').addEventListener('click', () => {
        if (confirm('Are you sure you want to log out?')) {
            window.location.href = 'login.html';
        }
    });

    document.getElementById('task-modal').addEventListener('click', e => {
        if (e.target.id === 'task-modal') hideModal();
    });
}
document.addEventListener('DOMContentLoaded', init);