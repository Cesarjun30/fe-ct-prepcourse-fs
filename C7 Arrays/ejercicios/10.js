function obtenerPrimerStringLargo(array) {
  // Devuelve el primer string con más de 5 caracteres en el array.
  // Tu código:

/****************** MEJOR ALGORITMO *******************/
 let masDeCinco = array.find((element) => element.length >= 5)
 return masDeCinco


/**************** UTILIZANDO BUCLE FOR  */  
for(let i = 0; i<array.length;i++){
  if(array[i].length >= 5){
    return array[i]
  }
}
}
console.log(obtenerPrimerStringLargo(["hola", "hell", "Bis", "ads", "bay"]))
console.log(obtenerPrimerStringLargo(['hello', 'world', 'this', 'is', 'a', 'test']))
//let unArray = ["hola", "helloo", "Bienvenidos", "adios", "baybay"];



//console.log(unArray.find((element) => element.length > 5));

module.exports = obtenerPrimerStringLargo;
