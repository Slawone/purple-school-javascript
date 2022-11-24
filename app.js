// Упражнение - Проверка робота

const message = prompt('Сколько будет 7 + или - 15?');

switch (true) {  
  case message === 'Я не робот':
  case Number(message) === -8:
  case Number(message) === 22:
    console.log('Успех');
    break;
  default:
    console.log('Вы робот!');
}
  