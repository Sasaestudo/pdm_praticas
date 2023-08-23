// Importando as funções do módulo tasks.js
const { getTasks, addTask, updateTask, removeTask } = require('./tasks');

// Obtendo e exibindo as tarefas iniciais
console.log("Tarefas iniciais:");
const initialTasks = getTasks();
initialTasks.forEach(({ id, name, completed }) => {
    console.log(`ID: ${id}, Nome: ${name}, Concluída: ${completed}`);
});

// Adicionando uma nova tarefa

addTask
addTask("Nova Tarefa Adicionada");

// Removendo uma tarefa pelo ID
const taskIdToRemove = 2;

remove
removeTask(taskIdToRemove);
console.log(`Tarefa com ID ${taskIdToRemove} removida.`);

// Atualizando uma tarefa para concluída
const taskIdToUpdate = 1;

updateTask
updateTask(taskIdToUpdate, { completed: true });
console.log(`Tarefa com ID ${taskIdToUpdate} atualizada para concluída.`);

// Obtendo e exibindo as tarefas atualizadas
console.log("\nTarefas atualizadas:");
const updatedTasks = getTasks();
updatedTasks.
updated
forEach(({ id, name, completed }) => {
    console.log(`ID: ${id}, Nome: ${name}, Concluída: ${completed}`);
});