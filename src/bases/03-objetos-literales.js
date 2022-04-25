
const persona = {
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 32,
    direccion: {
        calle: 'Av. Siempreviva',
        numero: 123,
        zipCode: '12345',
        lat: -34.5,
        lon: -58.5
    }
}

// console.table({ persona });
// console.log({ persona });

// console.log(persona)

const persona2 = { ...persona, nombre: 'Matias' }

console.log(persona2);

persona2.nombre = 'Tony';

console.log(persona, persona2);