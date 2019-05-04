//usando destructuring
const { crearArchivo } = require('./multiplicar/multiplicar')


//recibir parametros desde la terminal
// ej nodemon app.js --base=7
let argv = process.argv;
let parametro = argv[2];
let base = parametro.split('=', [1]);

crearArchivo(base)
    .then(archivo => console.log(`Archivo creado: ${ archivo }`))
    .catch(e => console.log(e))

// Sin destructuring
// const multiplicar = require('./multiplicar/multiplicar')
// let base2 = 5;
// multiplicar.crearArchivo(base).then(archivo => console.log(`Archivo creado: ${ archivo }`))