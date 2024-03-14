function esVocal(letra) {
  // Escribe una función que reciba una letra y, si es una vocal, muestre el mensaje “Es vocal”.
  // Si el usuario ingresa un string de más de un caracter, debes retornar el mensaje: "Dato incorrecto".
  // Si no es vocal, tambien debe retornar "Dato incorrecto".
  // Tu código:
  let a = "a",
    e = "e",
    i = "i",
    o = "o",
    u = "u";
  if (letra === a || letra === e || letra === i || letra === o || letra === u) {
    return "Es vocal";
  } else {
    return "Dato incorrecto";
  }
}

console.log(esVocal("e"));

module.exports = esVocal;
