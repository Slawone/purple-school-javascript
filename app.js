const arr = ['!', 'JS', 'люблю', 'Я'];
const resultArray = [];

for (let i = arr.length - 1; i >= 0; i--) {
  resultArray.push(arr[i]);
}

console.log(resultArray.join(' '));


// let newArr = [];

// for (let i = 0; i < arr.length; arr.length--) {
//   newArr.push(arr[arr.length - 1]);
// }
// console.log(newArr.join(' '));