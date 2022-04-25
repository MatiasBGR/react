// Desestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'IronMan',
}

//const { nombre, edad, clave } = persona;

const suseContext = ({ clave, nombre, edad, rango = 'Capitan'}) => {

    return {
        nombreClave: clave,
        anios: edad
    }
}


const { nombreClave, anios:edad } = suseContext(persona);
console.log (nombreClave, edad);