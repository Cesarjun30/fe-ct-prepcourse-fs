function agregarNumeros(arrayOfNums) {
  // Suma todos los elementos de arrayOfNums y retorna el resultado.
  // Tu código:
 
  /************* Algoritmo con reduce  **********/

  let newArray = arrayOfNums.reduce((ac,valorActual) =>  ac + valorActual)
  return newArray 

  /* Algoritmo con bucle for  */

  let suma = 0 
  for(let i = 0 ; i< arrayOfNums.length ; i++){

    suma += arrayOfNums[i]
  }
  return suma 
}

console.log(agregarNumeros([1,2,3,4]))
module.exports = agregarNumeros;
