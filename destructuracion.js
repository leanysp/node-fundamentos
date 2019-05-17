const {estudiante, obtenerPromedio} = require('./calculos');
const fs = require('fs');

console.log('el nombre del estudiante es '+ estudiante.nombre);
console.log('el promedio del estudiante es '+ obtenerPromedio(estudiante.notas.matematicas, estudiante.notas.ingles, estudiante.notas.programacion));

let {nombre, edad: anios, notas:{matematicas,ingles, programacion}}= estudiante;
console.log('el nombre del estudiante es '+ nombre);
console.log('el promedio del estudiante es '+ obtenerPromedio (matematicas, ingles, programacion));
console.log('la edad del estudiante es '+ anios);

let crearArchivo = (estudiante) =>{
  texto = 'el nombre del estudiante es '+ nombre + '\n'+
  'ha obtenido un promedio de '+obtenerPromedio(matematicas,ingles,programacion);
  fs.writeFile('promedio.txt', texto,(err) =>{
    if(err)throw (err);
    console.log('se ha creado el archivo');
  });
}

crearArchivo(estudiante);
