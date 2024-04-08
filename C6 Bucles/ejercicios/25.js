function esPalindromo(string) {
  // La función recibe un argumento "string".
  // Verifica si este string es palíndromo o no.
  // Retorna true si lo es, caso contrario, retorna false.
  // IMPORTANTE: Un palíndromo es una palabra o frase
  // que se lee igual hacia adelante que hacia atrás.
  // Tu código:

  let palabraNueva = string 
  if (string === palabraNueva.split("").reverse().join("")) {
   console.log(palabraNueva.split("").reverse().join(""))
   return true;
  } else {
   console.log(palabraNueva.split("").reverse().join(""))
    return false;
  }
  
}

//esPalindromo('asa asa')

// let palabra = "unu";
// let otra = "unu";

// let nuevaPalabra = palabra.split("").reverse().join("");
// console.log(nuevaPalabra === otra);
module.exports = esPalindromo;
