function encontrarElementoRepetido(numeros) {
  // La función recibe un argumento "numeros" que es un array de números.
  // Retorna el primer elemento repetido que se encuentre en el array.
  // Tu código:

  
  for(let i = 0; i < numeros.length; i++){
     for(let j = i + 1; j < numeros.length; j++){

      console.log(numeros[i], numeros[j], i, j)
         if(numeros[i] === numeros[j]){
          return numeros[i]
          
          
        
         }
     }


  }
  //return repetido
}

console.log(encontrarElementoRepetido([1,2,3,4,2,3,6]))

module.exports = encontrarElementoRepetido;