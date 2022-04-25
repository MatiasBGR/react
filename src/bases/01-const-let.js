
// Variables y constantes

const nombre = 'Matias';
const apellido = 'Bruce';

let valorDado = 5;
valorDado = 4;

console.log(nombre, apellido, valorDado);

// var No se debe usar...
if(true){
    const nombre = 'Peter';
    console.log(nombre);
    valorDado = 43;
}

console.log(nombre, valorDado);