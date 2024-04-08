function devolverUltimoElemento(array) {
  // Retornar el último elemento del arreglo recibido.
  // Tu código:
  console.log(array[array.length -1])
  return array[array.length -1]
}
console.log(devolverUltimoElemento([1,6,3,"a"]))

module.exports = devolverUltimoElemento;
