// Arreglos en JS
// cosnt arreglo = new Array(100)
// arreglo.push(1)
// arreglo.push(12)
// arreglo.push(13)
// arreglo.push(14)

const arreglo = [1, 12, 13, 14];

let arreglo2 = [ ...arreglo, 5];

console.table(arreglo2);

const arreglo3 = arreglo2.map( function(numero){
    return numero*2;
});

arreglo3.push(11);

console.log(arreglo);
console.log(arreglo2);
console.log(arreglo3);