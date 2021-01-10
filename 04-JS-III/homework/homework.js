// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  return array[0]// Devuelve el primer elemento de un array
  // Tu código:
}

function devolverUltimoElemento(array) {
  return array.push()// Devuelve el último elemento de un array
  // Tu código:
}

function obtenerLargoDelArray(array) {
  return array.length// Devuelve el largo de un array
  // Tu código:
}

function incrementarPorUno(array) {
  nuevoArray = [];// "array" debe ser una matriz de enteros (int/integers)
  for (i = 0; i < array.length; i ++) {// Aumenta cada entero por 1
  nuevoArray[i] = array[i] + 1;// y devuelve el array
  {return nuevoArray}// Tu código:
} }


function agregarItemAlFinalDelArray(array, elemento) {
  return array.push(elemento)// Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
}

function agregarItemAlComienzoDelArray(array, elemento) {
  return array.unshift(elemento)// Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
}

function dePalabrasAFrase(palabras) {
  return palabras.join (" ");
}

function arrayContiene(array, elemento) {
  for (var i = 0; i < array.length; i ++) {
    if (elemento === array[i]) {
        return true }
      else {return false}
  }
}

function agregarNumeros(numeros) {
  suma = 0;
  for (var i = 0; i < numeros.length; i ++) {// "array" debe ser una matriz de enteros (int/integers)
  suma = suma + numeros[i];// Suma todos los enteros y devuelve el valor
  } return suma// Tu código:
} 

function promedioResultadosTest(resultadosTest) {
  var suma = 0;// "resultadosTest" debe ser una matriz de enteros (int/integers)
  for (var i = 0; i < resultadosTest.length; i ++) {// Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  suma = suma + resultadosTest[i];
 var promedio = suma / resultadosTest.length;
} return promedio;
}



function numeroMasGrande(numeros) {
  numeroMayor = numeros[0];
  for (var i = 1; i < numeros; i ++) {
  if (numeros[i] > numeroMayor {// "numeros" debe ser una matriz de enteros (int/integers)
  numeroMayor = numeros[i];
  }
    }
  return numeroMayor;
  }

function multiplicarArgumentos() {
var multiplicacion = ();
  for i (var i = 0; i < arguments; i ++) {
    multiplicacion = arguments(i) *
  }
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0
  // Si se pasa un argumento, simplemente devuélvelo
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
};
