const tasks = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4', 'Задача 5'];

function Add(task) {
  tasks.push(task);
}

Add('Задача 6');

console.log(tasks);

function Remove(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  return tasks.splice(index, 1);
}

Remove('Задача 4');
console.log(tasks);

function Prioritize(task) {
  const res = Remove(task);
  if (!res) {
    return;
  }
  tasks.unshift(res[0]);
}

Prioritize('Задача 3');
console.log(tasks);