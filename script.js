document.addEventListener('DOMContentLoaded', function () {
    // Função para adicionar uma tarefa à lista
    function addTask(title, description, dueDate, priority) {
        const taskList = document.getElementById('task-list');
        
        // Criar um novo item de lista para a tarefa
        const listItem = document.createElement('li');
        
        // Adicionar o título, descrição, data de vencimento e prioridade
        listItem.innerHTML = `
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Vencimento: ${dueDate}</p>
            <p>Prioridade: ${priority}</p>
        `;
        
        // Adicionar o item de lista à lista de tarefas
        taskList.appendChild(listItem);
    }

    // Adicionando um evento de envio ao formulário de tarefas
    const form = document.getElementById('task-form');
    form.addEventListener('submit', function (event) {
        event.preventDefault(); // Impede o envio padrão do formulário

        // Obter os valores dos campos de entrada
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('task-priority').value;

        // Adicionar a tarefa à lista
        addTask(title, description, dueDate, priority);

        // Limpar os campos do formulário após adicionar a tarefa
        form.reset();
    });
});
