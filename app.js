// Упражнение - Проверка прав

let balance = 1300;
let bonusBalance = 100;
let isBanned = false;
let isExist = false;
let isSelling = true;

const canBuy = (balance > 1000 || bonusBalance > 100)
  && !isBanned
  && !isExist
  && isSelling;

console.log(`Может купить: ${canBuy ? 'Да' : 'Нет'}`);