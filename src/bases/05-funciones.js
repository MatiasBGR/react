// Funciones en JS

const saludar = function( nombre ) {
    return `Hola ${ nombre }`;
}

const saludar2 = ( nombre ) => {
    return `Hola ${ nombre }`;
}

const saludar3 = ( nombre ) => `Hola ${ nombre }`;

const getUser = ( userName ) => ({
    uid: 'ABC123',
    userName
});

console.log( saludar('Matias1') );
console.log( saludar2('Matias2') );
console.log( saludar3('Matias3') );
console.log( getUser('Matias4') );

// Tarea
// 1. Crear una función que devuelva un objeto con el nombre y apellido
