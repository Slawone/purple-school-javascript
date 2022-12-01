// function power(pow) {
//   return function(num) {
//     return num ** pow;
//   }
// }

// console.log(power(4)(5));

const power = pow => num => num ** pow;

console.log(power(4)(5));