function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:

  let newArray = [];
  let interrumpir = false;
  for (let i = 2; i < 22; i = i + 2) {
    let nuevoValor = i + num;
    if (nuevoValor === 10) {
      interrumpir = true;

      break;
    } else {
      newArray.push(nuevoValor);
    }
  }

  if (interrumpir) {
    return "Se interrumpió la ejecución";
  } else {
    return newArray;
  }
}

console.log(breakStatement(-4));

module.exports = breakStatement;
