console.log('hola mundo')
function promedio(nota_uno,nota_dos,nota_tres){
  let resultado =(nota_uno+nota_dos+nota_tres)/3;
  console.log('el promedio1 es'+resultado);
}
promedio(3,4,5);

let promedio2=(nota_uno,nota_dos,nota_tres)=>{
  setTimeout(function(){
  let resultado =(nota_uno+nota_dos+nota_tres)/3;
  console.log('el promedio2 es'+resultado);
}, 2000);
}
promedio2(1,2,1);

let promedio3=(nota_uno,nota_dos,nota_tres)=>
console.log('el promedio3 es'+(nota_uno+nota_dos+nota_tres)/3);
promedio3(5,4,5);
