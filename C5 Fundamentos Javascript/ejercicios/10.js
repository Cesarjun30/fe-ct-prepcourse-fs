function esFechaValida(fecha) {
  // La función recibe un argumento "fecha".
  // Comprueba si este corresponde a una fecha válida.
  // Si es así, retorna true, sino retorna false.
  // Tu código:

  if (new Date(fecha) <= fecha && new Date(fecha) >= fecha) {
    return true;
  } else {
    return false;
  }
}

console.log(esFechaValida(("2024-3-17")));

module.exports = esFechaValida;
