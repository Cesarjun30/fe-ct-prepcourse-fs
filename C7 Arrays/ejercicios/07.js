function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:

  /*****ALGORITMO MAS RAPIDO**********/

  let ordenado =  array.sort() 
  
  return ordenado 

  /****************** ALGORITMO NUMERO 2 *****************/

  // for (let i = 0; i < array.length; i++) {
  //   for (let j = 0; j < array.length; j++) {
  //     if (array[j] > array[j + 1]) {
  //       let temp = array[j];
  //       array[j] = array[j + 1];
  //       array[j + 1] = temp;
  //     }
  //   }
    
  // }
  // return array 
}



console.log(ordenarArray([8,6,8,6,3,5,7,10]))
console.log(ordenarArray([ "Aveces",
  "nunca",
  "always",
  " siempre",
  "Cuando se pueda"]))

module.exports = ordenarArray;
