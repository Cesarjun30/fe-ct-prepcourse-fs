function invertirTexto(texto) {
  // La función recibe un argumento "texto" que es un string.
  // Tu objetivo es invertir el string y devolver el string invertido.
  // Tu código:

  let dividido = texto.split("");

  let invertido = "";
  for (let i = 0; i < dividido.length; i++) {
    invertido += dividido[dividido.length - 1 - i];
  }
  console.log(invertido);
  return invertido;
}

invertirTexto("la guasabara ")

// let text = "cesar";
// let divided = text.split('')
// divided.join()
// console.log(divided.reverse().join(""))

module.exports = invertirTexto;
