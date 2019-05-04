//utilizando un archivo separado para dejar toda la confguración de yargs en el
const argv = require('./configuracion/yargs').argv;

// const argv = require('yargs')
//     .command('listar', 'Imprime en consola la tabla de multiplicar', {
//         base: { demand: true, alias: 'b' },
//         limite: { alias: 'l', default: 10 }
//     })
//     .command('crear', 'Crea archivo con la tabla de multiplicar', {
//         base: { demand: true, alias: 'b' },
//         limite: { alias: 'l', default: 10 }
//     })
//     .help()
//     .argv;

//usando destructuring
const { crearArchivo, listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];

switch (comando) {
    case 'listar':
        listarTabla(argv.base, argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base, argv.limite)
            .then(archivo => console.log(`Archivo creado: ${ archivo }`))
            .catch(e => console.log(e))
    default:
        console.log('comando no reconocido');
}