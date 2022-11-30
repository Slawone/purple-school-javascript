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
  tasks.splice(index, 1);
}

Remove('Задача 10');
console.log(tasks);

function Prioritize(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  const oldEl = tasks[index];

  tasks.splice(index, 1);

  tasks.unshift(oldEl);
}

Prioritize('Задача 10');
console.log(tasks);

/*
Сделать функции:
Добавление задачи в конец
Удаление задачи по названию
Перенос задачи в начало списка по названию
! Всегда меняем исходный массив
*/






// const tasks = ['Задача 1', 'Задача 2', 'Задача 3', 'Задача 4', 'Задача 5'];

// function addEl(arr, el) {
//   arr.push(el);
//   return arr;
// }

// function delEl(arr, el) {
//   arr.splice(arr.indexOf(el), 1);
//   return arr;
// }

// function reverseArr(arr) {
//   return arr.reverse();
// }

// // console.log(addEl(tasks, 'Задача 2'));

// // console.log(delEl(tasks, 'Задача 1'));

// console.log(reverseArr(tasks));