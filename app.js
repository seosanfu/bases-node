const argv = require('./config/yargs').argv;
const color = require('colors');

const { listTable, createFile } = require('./multiply/multiply');

let comando = argv._[0];

switch (comando) {
  case 'listar':
    listTable(argv.base, argv.limite);
    break;

  case 'crear':
    createFile(argv.base, argv.limite)
      .then(file => console.log(`Archivo ${file} creado.`.green))
      .catch(e => console.log(`Error => ${e}`.red));
    break;

  default:
    console.log('Comando no reconocido.'.yellow);
    break;
}