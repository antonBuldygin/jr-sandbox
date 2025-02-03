const fs = require('fs');
const fsPromises = fs.promises;

const files = fs.readdirSync(__dirname);
// console.log(files);

for (const filename of files) {
  if (filename === "index.js") {
    const fileContent = fs.readFileSync(filename, "utf-8").toString();
    // console.log(fileContent);
  }
}





// Внутри промисов зашит асинхронный код и промисы сами по себе тоже работают 
// на коллбэках

// const getBlinchiki = function () {
//   new Promise(function (resolve, reject) {
//     const muka = "";
//     const voda = "";
//     const skovorodka = "";

//     blinchiki.magic(muka, voda, skovorodka, function (err, data) {
//       if (err !== null) {
//         return reject(err);
//       }

//       resolve(data);
//     });
//   });
// }

// try {
//   const result = await getBlinchiki(); // "____"
//   console.log(res);
// } catch(err) {
//   console.warn(err);
// }

// const result2 = getBlinchiki() // Promise
//   .then((res) => console.log(res))
//   .catch((err) => console.warn(err));

// const blinchikiRequest = getBlinchiki();
// blinchikiRequest
//   .then((blinchikiRequest) => /**  sdfsdfsdfsdfdsfds  */)
//   .catch((err) => console.log(err));



// const getBlinchiki = async function() {
//   const muka = "";
//   const voda = "";
//   const skovorodka = "";

//   const result = await blinchiki.magic(muka, voda, skovorodka);

//   return result;
// };

// const blinchikiRequest = await getBlinchiki();







// fetch(`http://my-api`)
//   .then((response) => response.json())
//   .then((json) => {});


// const response = await fetch();
// const json = await response.json();

// console.log(json);


// Преимущества промиса
// 1. После того, как я запустил асинхронное действие, у меня есть доступ
//    к объекту, который описывает состояние этого действия и я могу общаться
//    с этим объектом в синхронном режиме (читать его, передавать, записывать)
// 2. У промиса явно разделен трек ошибки и успешного кода и я могу отдельно 
//    обработать успешные кейсы и неуспешные




// JS — однопоточный язык
// асинхронность в JS достигается тем, что существуют параллельные API
// которые могут в своем собственном режиме выполнять закинутые в них задачи
// но в JS не существует способа контроля этих задач, не существует возможности
// обмениваться информацией и неизвестно, когда эта задача закончит исполнение

// Преимущество асинхронного кода
// - не блокирует выполнение программы и не приходится дожидаться выполнения
//   сложных и длительных команд

// Недостаток асинхронного кода
// - теряется линейность выполнения программы и нужно полагаться на коллбэки 
//   (и не только)
// - теряется линейность чтения программы программистом и код сложнее
//   воспринимать на глаз

// Способы работы с асинхронным кодом в JS
// - коллбэк
// - Promise API - с англ языка — обещание
//   - async/await

const printFileContent = function (err, nodeFileContent) {
  if (err !== null) {
    console.error(err);
    return;
  }

  console.log(nodeFileContent);
};

const getDirFiles = function onFilesRead(err, dirFiles) {
  if (err !== null) {

  }

  for (const filename of dirFiles) {
    if (filename === "index.js") {
      fs.readFile(filename, 'utf8', printFileContent);
    }
  }
};

fs.readdir(`${__dirname}`, getDirFiles);







// Запускаем чтение директории
fsPromises.readdir(__dirname)
  // Перебираем все файлы находим нужный, запускаем его чтение
  .then(function (files) {
    for (const filename of files) {
      if (filename === "index22222.js") {
        return fsPromises.readFile(filename, "utf-8");
      }
    }

    return Promise.reject();
  })
  // Читаем содержимое файла
  .then(function (fileContent) {
    console.log(fileContent);
  })
  // Обработка ошибки при чтении файла или обработка ситуации, 
  // когда файл не найден
  .catch(function (err) {
    console.log("Something went wrong");
  });


// Promise.all([
//   fetch(),
//   fetch(),
// ])
//   .then()
//   .catch();

// Многопоточность
// - асинхронна
// - особенность заключается в том, что потоками мы управляем самостоятельно
//   - запускаем потоки
//   - останавливаем потоки
//   - обмениваемся информацией между потоками
// Асинхронность
// - более широкий термин чем многопоточность
// - в JS асинхронность реализована за счет существования Event Loop, внешних
//   API и очередей вызова
// - в JS нет возможности* запускать параллельные потоки, все команды JS
//   исполняются строго последовательно (за счет стека вызовов)
//   - стек (stack — стопка) — структура данных, которая работает по принципу
//     LIFO (Last in first out)


// * кроме Worker


/*
              ~~~~~~~~~~~~~~~~~~~       <- 3 блин
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~  <- 2 блин
          ~~~~~~~~~~~~~~~~~~~~~~~~~~~~  <- 1 блин
_________________________________________________
*/