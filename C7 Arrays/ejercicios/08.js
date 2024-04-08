function encontrarElemento(num, array) {
  // Busca el número pasado por argumento dentro del array.
  // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
  // Si no se encuentra, retorna -1.
  // Tu código:
  /*************** MEJOR ALGORITMO *****************/
   let encontrado = array.findIndex((element) => element === num
      );
   return encontrado

  /*************** Algoritmo utilizando bucle for **************/

  for (let i = 0; i < array.length; i++) {
    if (num === array[i]) {
      return i;
    } 
    
     
  }
  return -1
}

console.log(encontrarElemento(20, [6, 5, 8, 3, 4]));
module.exports = encontrarElemento;
