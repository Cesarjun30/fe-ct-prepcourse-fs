function esArrayNoVacio(arr) {
  // La función recibe un argumento "arr".
  // Comprueba si este argumento es un array y si tiene al menos un elemento.
  // Si es así, retorna true, de lo contrario, retorna false.
  // Tu código:

  let array1 = [];

  if (typeof arr === typeof (array1) && arr.length > 0) {
    return true;
  } else {
    return false;
  }
}

console.log(esArrayNoVacio([2,3]))

module.exports = esArrayNoVacio;
