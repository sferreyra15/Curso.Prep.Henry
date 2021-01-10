// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  if (x > y) { return x;// "x" e "y" son números enteros (int).
  } else if (y > x) {return y;// Devuelve el número más grande
  } else {return x;// Si son iguales, devuelve cualquiera de los dos
  }// Tu código:
}

function saludo(idioma) {
  if (idioma === "aleman") {// Devuelve un saludo en tres diferentes lenguajes:
  return "Guten Tag!"}// Si "idioma" es "aleman", devuelve "Guten Tag!"
  else if (idioma === "mandarin") {return "Ni Hao!";
} else if (idioma === "ingles") {return "Hello!";
} else {return "Hola!"} }
function esDiezOCinco(numero) {
    return numero === 5 || numero === 10// Devuelve "true" si "numero" es 10 o 5
    // De lo contrario, devuelve "false"
    // Tu código:
}

function estaEnRango(numero) {
  return numero < 50 && numero > 20// Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
}

function esEntero(numero) {
  return numero - Math.floor(numero) === 0// Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
}

function fizzBuzz(numero) {
  if (numero % 3 === 0 && numero % 5 === 0) {return "fizzbuzz";// Si "numero" es divisible entre 3, devuelve "fizz"
  }// Si "numero" es divisible entre 5, devuelve "buzz"
  else if (numero % 3 === 0 ) {return "fizz"; //es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  } else if  (numero % 5 === 0) {return "buzz";// De lo contrario, devuelve el numero
} else {return numero} } 

function esPrimo(numero) {
  if (numero < 2) {return false}// Devuelve "true" si "numero" es primo
  if (numero === 2) {return true}
  for (i= 2; i <= numero; i ++) {
  if (numero % i === 0) {return false}
  else {return true}// De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
} }



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  saludo,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  esPrimo
};
