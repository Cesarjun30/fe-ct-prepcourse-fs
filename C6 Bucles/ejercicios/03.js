function obtenerMayor(x, y) {
  // "x" e "y" son números enteros.
  // Retorna el número más grande.
  // Si son iguales, retornar cualquiera de los dos.
  // Tu código:

  if (x > y || x === y) {
    return x;
  } else if (x < y || x === y) {
    return y;
  }
}

console.log(obtenerMayor(6,9))
module.exports = obtenerMayor;
