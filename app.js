// Функция возвращает true, если элемент есть и false, если нет.

const arr = [2, 4, 4, 10, 10];

// function some(arr, el) {
//   arr.filter((item) => {
//     item === el;
//   })
// }

// console.log(some(arr, 2));

function some (array, element) {
  const res = array.find(el => el === element);
  return res == undefined ? false : true;
}

console.log(some(arr, 10));

console.log(arr.some(el => el === 0));
