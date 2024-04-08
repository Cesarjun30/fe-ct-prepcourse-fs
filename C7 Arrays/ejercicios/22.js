function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:


  let  array = []
  for(let i = 0; i < 11; i++){
    let multiplicar = 6 * i
    array.push(multiplicar)
  }
  return array 
}

console.log(tablaDelSeis())
module.exports = tablaDelSeis;
