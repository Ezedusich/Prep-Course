// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0]
}

function devolverUltimoElemento(array) {
  return array[array.length-1];
}


function obtenerLargoDelArray(array) {
  return array.length;
}


function incrementarPorUno(array) {
  var arrayB = []
  for(var i=0; i < array.length; i++){
    arrayB[i] = array [i] + 1
  }
  return arrayB
}


function agregarItemAlFinalDelArray(array, elemento) {
  array[array.length] = elemento
  return array;
}


function agregarItemAlComienzoDelArray(array, elemento) {
  array.unshift(elemento)
    return array;
  }




function dePalabrasAFrase(palabras) {
 return palabras.join(' ')
}


function arrayContiene(array, elemento) {
 for(var i = 0; i < array.length; i++){
   if(array[i]===elemento) return true
 }
 return false 
}


function agregarNumeros(numeros) {
  var resultado = 0
  for(var i = 0; i < numeros.length; i++){
    resultado = resultado + numeros[i]
  }
  return resultado
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  return agregarNumeros(resultadosTest)/resultadosTest.length
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var numeroM = numeros[0];
  for (var i = 1; i<numeros.length; i++){
    if(numeros[i]>numeroM){
      numeroM = numeros[i];
    }
  }
  return numeroM
}


function multiplicarArgumentos() {
// Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
// Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
// Escribe tu código aquí:
if(arguments.length===0){
  return 0
}
if(arguments.length===1){
  return arguments[0]
}
var producto = 1;
for(var i=0; i<arguments.length; i++){
  producto = producto * arguments[i]
}
return producto;
}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
var cantidadElementos = 0;
for(var i=0; i<arreglo.length; i++){
  if(arreglo[i]>18){
    cantidadElementos++;
  }
}
  return cantidadElementos;

}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí   
  if(numeroDeDia === 1 || numeroDeDia === 7){
    return "Es fin de semana"
  }
  else{
    return "Es dia Laboral"
  }
  }



function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  if(n.toString()[0]==9){
    return true;
  }
  return false;
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  for(var i=1; i<arreglo.length; i++){
    if(arreglo[0] !== arreglo[i]){
      return false;
    }
  }
  return true;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var nueVoArray =[];
  for(let i=0; i < array.length; i++){
    if(
    array[i]==="Enero" || 
    array[i]==="Marzo" || 
    array[i]==="Noviembre"
    ){
    nueVoArray.push(array[i]);
    }
  }
  if(nueVoArray.length < 3){
    return "No se encontraron los meses pedidos";
  }else{
    return nueVoArray;
  }
}



function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
var nueVoArrayA =[];
for(let i=0; i < array.length; i++){
  if(
  array[i] >100 ){
    nueVoArrayA.push(array[i]);
  }
}
return nueVoArrayA
}

function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arrayA3 = [];
for(let i=0; i = 10; i++){
  if(
    arrayA3[i] == 20){
      arrayA3.push(numero[i]);
    
    return arrayA3
    }
    if(arrayA3 == [i])
    break;
    i++;
  }
  return "Se interrumpío la ejecución"
}



function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
