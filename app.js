// Упражнение - Размещение депозита

const deposit = 12000;
const rate = 0.07;
const timeOfDeposit = 24;
const houseCost = 13500;

const sum = (deposit * (1 + rate / 12) ** timeOfDeposit).toFixed(0);

if (sum > 13500) {
  console.log(`Вася накопил ${sum}$. Он может купить дом. У него останется ${sum - houseCost}$`);
} else {
  console.log(`Вася накопил ${sum}$. Купить не может.`);
}