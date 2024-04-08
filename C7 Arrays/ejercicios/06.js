function invertirArray(array) {
  // Invierte el arreglo array recibido por argumento.
  // Tu código:
  
  /* ************* MEJOR ALGORITMO  **************** 
  
  let reverse = array.reverse()
  return reverse  */

  /* *********************************************** */

  /* ESTE ALGORITMO PASA EL TEST PERO ESTA LIMITADO A UNA CATIDAD DE ITERACIONES POR LO TANTO SI EL ARRAY ES MAS LARGO NO DEVOLVERA TODOS LOS ARRAYS   */
  
  // let reverse = [];
  // for (let i = 0; i <= array.length + 3 ; i++) {
  //   reverse[i] = array.pop(i);
  // }

  // console.log(reverse);
  // return reverse; 
  
  /* ******************************************************** */

  /* ******************************************************** */
  // ESTE SOLUCIONA EL PROBLEMA DEL CODIGO DE ARRIBA TAMBIEN PASA EL TEST.
  let reverse = [];
  for (let i = array.length -1 ; i >= 0 ; i--) {
    
    reverse.push(array.pop(i));
  }

  console.log(reverse);
  return reverse; 
}

console.log(invertirArray([Number, 1, 'hola', true, null, undefined ]))

module.exports = invertirArray;


