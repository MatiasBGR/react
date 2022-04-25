
const nombre = 'Matias';
const apellido = 'Bruce';

// const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `
${nombre}
${apellido}
${2 + 2}`;

 
console.log( nombreCompleto );

function getSaludo(nombre){
    return `Hola ${nombre}`;
}

console.log( getSaludo('Matias') );

console.log(`Este es un texto ${getSaludo(nombre)}`);