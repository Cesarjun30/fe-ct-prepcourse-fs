function multiplicarElementosPorIndice(array) {
  // Multiplica cada elemento del array por su índice.
  // Devuelve el nuevo arreglo con los resultados.
  // Tu código:
 
  let newArray = array.map((item, ind) =>  item * ind )
  return newArray

}

console.log(multiplicarElementosPorIndice([8,6,4,8,2,1]))


module.exports = multiplicarElementosPorIndice;
