// Arreglo o Arrays

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.table(numeros);

/*
const arreglo = ["Hola", 10, true, "si", null, {nombre: "Juan", Trabajo: "Desarrollador"}, [1,2,3] ];
console.log(arreglo);

//acceder a un elemento del arreglo
console.log(numeros[4]);

// conocer la extensión del arreglo
console.log(meses.length);

meses.forEach(function(mes){
    console.log(mes);
});

*/

// Agregar elementos al arreglo anteriormente
numeros [10] = 11;

//nueva forma de agregar elementos al arreglo
numeros.push(12);
//multiples elementos
numeros.push(13, 14, 15); //al final del arreglo

//agrega al inicio del arreglo
numeros.unshift(-1,-2,-3);
console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

//meses.pop(); //elimina el último elemento del arreglo
//meses.shift(); //elimina el primer elemento del arreglo
//meses.splice(2, 1); //elimina un elemento del arreglo

const nuevoArreglo = [...meses, 'Enero1'];
console.log(meses);

