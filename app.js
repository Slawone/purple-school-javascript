// Упражнение - Кредит на MacBook

function computeCredit(age, hasJob = false) {
  switch(true) {
    case age > 24 && hasJob:
      return 500;
    case age > 24:
      return 100;
    default:
      return 0;
  }
}

function canBuy(productPrice, age, money, hasJob = false) {
  const creditMoney = computeCredit(age, hasJob);
  return productPrice <= money + creditMoney;
}

console.log(canBuy(2000, 25, 1500, true));

//--------------------------------------------------------------------------------------
// Мое решение

// const userAge = 30;
// const isWorking = false;
// const money = 1900;
// function getCredit(age, work) {
//   if (age > 24 && work === true) {
//     return 500;
//   } else if (age > 24) {
//     return 100;
//   } else {
//     return 0;
//   }
// }

// function getMac(money, age, work) {
//   if (money + getCredit(age, work) >= 2000) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(getMac(money, userAge, isWorking));

//--------------------------------------------------------------------------------------

// Пример из урока

// const KG_IN_USD = 7;
// const KM_IN_USD = 5;

// function calculateW(present) {
//   return present * KG_IN_USD;
// }

// function calculateKm(distance) {
//   return distance * KM_IN_USD;
// }

// function getExchangePrice(present1, present2, distance) {
//   const price1 = calculateW(present1);
//   const price2 = calculateW(present2);
//   const distancePrice = calculateKm(distance);
//   return price1 + price2 + distancePrice;
// }

// console.log(getExchangePrice(1, 2, 10)); 