// Найти среднее значение последовательности чисел с помощью reduce

const arr = [2, 4, 4, 10];

const avg = arr.reduce((acc, element, i) => {
  if (i != arr.length - 1) {
    return acc + element;
  } else {
    return (acc + element) / arr.length;
  }
}, 0);

console.log(avg);