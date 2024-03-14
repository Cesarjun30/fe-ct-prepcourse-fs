//var hoy = new Date("1989-03-19");
//var year = hoy.getFullYear()

function esMayorDeEdad(fechaNacimiento) {
  // La función recibe un argumento "fechaNacimiento" correspondiente a la fecha
  // de nacimiento de una persona.
  // Determina si esta persona es mayor de edad (tiene 18 años o más).
  // Devuelve true si lo es, caso contrario, retorna false.
  // PISTA: Investiga el método getFullYear() de la clase Date para obtener el año actual.
  // Tu código:

  let hoy = new Date();

  if(hoy.getFullYear() - fechaNacimiento.getFullYear() >= 18  ){
    return true;
  }else{return false}
}

console.log(esMayorDeEdad(new Date("2012-03-19")))


module.exports = esMayorDeEdad;