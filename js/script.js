/* Código JavaScript para a To-Do List */

// Função para adicionar uma nova tarefa à lista
function addTask() {
    // Obter elementos do DOM
    var taskInput = document.getElementById("taskInput");
    var prioritySelect = document.getElementById("priority");
    var taskList = document.getElementById("taskList");

    // Verificar se a entrada da tarefa está vazia
    if (taskInput.value.trim() === "") {
        alert("Digite uma tarefa válida!");
        return;
    }

    // Criar novo item de lista
    var newTask = document.createElement("li");
    newTask.innerHTML = `
        <span>${taskInput.value}</span>
        <span class="priority">${prioritySelect.value}</span>
        <button class="delete-btn" onclick="deleteTask(this)">Excluir</button>
    `;

    // Adicionar o novo item à lista
    taskList.appendChild(newTask);
    
    // Limpar o campo de entrada
    taskInput.value = "";
}

// Função para excluir uma tarefa da lista
function deleteTask(btn) {
    // Obter o elemento pai do botão (o item da lista)
    var task = btn.parentNode;
    // Remover o item da lista
    task.parentNode.removeChild(task);
}
// Função para organizar as tarefas com base na prioridade
function organizeTasks() {
    var taskList = document.getElementById("taskList");
    var tasks = Array.from(taskList.children);

    tasks.sort(function (a, b) {
        var priorityA = a.querySelector(".priority").innerText;
        var priorityB = b.querySelector(".priority").innerText;

        // Defina a ordem de prioridade desejada aqui
        var priorityOrder = [
            "urgent-important",
            "urgent",
            "important",
            "not-urgent-not-important"
        ];

        return priorityOrder.indexOf(priorityA) - priorityOrder.indexOf(priorityB);
    });

    // Limpar a lista atual
    taskList.innerHTML = "";

    // Adicionar as tarefas organizadas à lista
    tasks.forEach(function (task) {
        taskList.appendChild(task);
    });
}
