const tasks = ['Задача 1'];

function Add(task) {
  tasks.push(task);
}

function Remove(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  tasks.splice(index, 1);
}

function Proritize(task) {
  const index = tasks.indexOf(task);
  if (index === -1) {
    return;
  }
  const oldTask = tasks[index];
  tasks.splice(index, 1);
  tasks.unshift(oldTask);
}
Add('Задача 2');
Add('Задача 3');

console.log(tasks);

Remove('Задача 2');

console.log(tasks);

Proritize('Задача 3');

console.log(tasks);

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