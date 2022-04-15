// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x === y) {
    return x || y;
  }
  if (x > y) {
    return x;
  }
  if (x < y) {
    return y;
  }
}




function mayoriaDeEdad(edad) {
  if (edad >= 18) {
    return "Allowed";
  }
  return "Not allowed";
}

  
function conection(status) {
  if (status == 1) {
    return "Online";
}
if (status == 2) {
    return "Away";
}
return "Offline";
}

function saludo(idioma) {
  if (idioma === 'aleman') {
    return "Guten Tag!";
}
if (idioma === 'mandarin') {
    return "Ni Hao!";
}
if (idioma === 'ingles') {
    return "Hello!";
}
return "Hola!";
}



function colors(color) {
  switch(color) {
    case "blue":
      return "This is blue";
      case "red":
return "This is red";
case "green":
return "This is green";
case "orange":
return "This is orange";
default: 
return "Color not found"
}
}

function esDiezOCinco(numero) {
  switch(numero) {
    case 5:
      return true;
      case 10:
        return true;
        default:
          return false;
  }
}

  

function estaEnRango(numero) {
  return numero < 50 && numero > 20;
}

function esEntero(numero) {
  return Math.floor(numero)===(numero);
}

function fizzBuzz(numero) {
  if( numero % 15 == 0){
    return "fizzbuzz";
}
if(numero % 5 == 0){
    return "buzz";
}
if(numero % 3 == 0){
    return "fizz"
}else{
    return numero;
}
}

function operadoresLogicos(num1, num2, num3) {
  if(num1 < 0 || num2 < 0 || num3 < 0){
    return "Hay negativos";
  }
if(num1 === 0 || num2 === 0 || num3 === 0){
  return "Error";
}
if(num1 > num2 && num1 > num3 && num1 > 0){
  return "Número 1 es mayor y positivo";
}
if(num3 > num2 && num3 > num1){
  return num3 + 1;
}
return false;
}

function esPrimo(numero) {
  if(numero < 2){
    return false;
  }
for(var i = 2; i < numero; i++){
  if(numero / i === 0){
    return false;
  }
return true;
}
}

function esVerdadero(valor){
  if (valor == true){
    return "Soy verdadero";
}else{
    return "Soy falso";
}
}

function tablaDelSeis(){
  for(var j=0; j<61; j++){
    if(j%6 ===0){ 
 console.log(j);
   }
   }
   return;
 }
     
  

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí
  
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
