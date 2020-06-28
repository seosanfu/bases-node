const fs = require('fs');
const color = require('colors');

let listTable = (base, limit) => {
  let data = '';

  console.log('================='.green);
  console.log(`== Tabla de ${base} ==`.green);
  console.log('================='.green);

  for (let i = 1; i <= limit; i++) {
    let result = base * i;
    data += `${base} * ${i} = ${result} \n`;
  }

  console.log(data);
}

let createFile = (base, limit) => {
  return new Promise((resolve, reject) => {

    if (!Number(base)) {
      reject(`El valor: ${base}, no es un número.`)
      return;
    }


    let data = '';
    let fileName = 'app-data.txt';
    let filePath = 'tables/';

    for (let i = 1; i <= limit; i++) {
      let result = base * i;
      data += `${base} * ${i} = ${result} \n`;
    }

    fs.writeFile(`${filePath}/${fileName}`, data, (err) => {
      if (err)
        reject(err);
      else
        resolve(fileName);
    });
  })
}

module.exports = {
  createFile,
  listTable
}