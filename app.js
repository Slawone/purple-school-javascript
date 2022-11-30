const url = 'https://purpleschool.ru/course/javascript';

function getUrlComponents (url) {
  const [protocol, _, host, ...path] = url.split('/');
  console.log(`Протокол: ${protocol.split(':')[0]}`);
  console.log(`Доменное имя: ${host}`);
  console.log(`Путь внутри сайта: /${path.join('/')}`);
}

getUrlComponents(url);


/*
Дан произвольный url вида - https://purpleschool.ru/course/javascript
Нужно сделать функцию, которая выводит в консоль:
Протокол (https)
Доменное имя (purpleschool.ru)
Путь внутри сайта (/course/javascript)
*/