function encontrarNumeroFaltante(numeros) {
  // La función recibe un argumento "numeros" correspondiente a un array de números.
  // Encuentra el número faltante en una secuencia de números enteros consecutivos
  // y retórnalo.
  // Devuelve null si el aray es vacío o si no hay números faltantes.
  // Tu código:

  // declaramo una variable y la damos un valor de null

  let faltante = null;

  // evaluamos que el parametro numeros que es un array su longitud no sea 0 si lo es devolver el valor de faltante
  if (numeros.length === 0) {
    return faltante;
  } else {
    for (let i = 0; i < numeros.length; i++) {
      
      // evualuacion para ver si el iterador es igual a la longitud del array de esta manera solo devolvemos el valor de null ya que no falta nada en la secuencia // luego evaluamos si el numero en la posicion i + 1 es igual al numero que esta en la siguiente posicion. si es asi devolver el numero en dicha posicion i + 1.  

      if (numeros.length - 1 === i) {
        return faltante;
      } else if (numeros[i] + 1 !== numeros[i + 1]) {
        faltante = numeros[i] + 1;
        break;
      }
    }
  }

  return faltante;
}
console.log(encontrarNumeroFaltante([]));
console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
console.log(encontrarNumeroFaltante([1, 2, 3, 4, 5, 6, 7, 9, 10]));
console.log(
  encontrarNumeroFaltante([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 28, 29, 30,
  ])
);
module.exports = encontrarNumeroFaltante;
