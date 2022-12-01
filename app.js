const operations = [1000, -700, 300, -500, 10000];
let startBalance = 100;

function getBalance (arr, initialBalance) {
  let balance = initialBalance;
  for (const element of arr) {
    balance += element;
  }
  return balance;
}

console.log(getBalance(operations, startBalance));

function checkOperations(arr, initialBalance) {
  let balance = initialBalance;
  let isOk = true;
  for (const element of arr) {
    balance += element;
    if (balance < 0) {
      isOk = false;
      break;
    }
  }
  return isOk;
}

console.log(checkOperations(operations, startBalance));

function avarageOperations (arr) {
  let positiveCount = 0;
  let negativeCount = 0;
  let positiveSum = 0;
  let negativeSum = 0;
  for (const element of arr) {
    if (element > 0) {
      positiveCount++;
      positiveSum += element;
    }
    if (element < 0) {
      negativeCount++;
      negativeSum += element;
    }
  }
  return [positiveSum / positiveCount, negativeSum / negativeCount];
} 

console.log(avarageOperations(operations));

// let negativeBalance = 0;

// function getTotalBalance(arr) {
//   for (element of arr) {
//     startBalance += element;    
//   }
//   return startBalance;
// }

// console.log(getTotalBalance(operations));

// function getNegativeBalance(arr) {
//   getTotalBalance(arr);
//   if (startBalance < 0) {
//     console.log(false);
//     return;
//   }
// }

// console.log(getNegativeBalance(operations));

// let averageIncome = 0;

// function getAverageCons (arr) {
//   for (element of arr) {
//     if (element >= 0) {
//       averageIncome += element;
//     }
//   }
//   averageIncome /= 3;
// }

// getAverageCons(operations);

// console.log(averageIncome);