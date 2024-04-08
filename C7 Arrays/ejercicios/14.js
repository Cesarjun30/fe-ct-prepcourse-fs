function contarElementosMayoresA10(array) {
  // Cuenta y devuelve la cantidad de elementos mayores a 10 en el array de números.
  // Tu código:

  /****************MEJOR  ALGORITMO **************/
     let newArray = array.filter((element) =>  element > 10);
   return newArray.length

  /******************** ALGORITMO CON BUCLE FOR ************/

  let newArray2 = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] > 10) {
      newArray2.push(array[i]);

      
    }
  }
  return newArray2.length;
  
}

console.log(contarElementosMayoresA10([1, 15, 12, 7, 25, 11]));

module.exports = contarElementosMayoresA10;
