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
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
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
