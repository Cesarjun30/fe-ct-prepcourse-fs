function obtenerElementoAleatorio(array) {
   // Devuelve un elemento aleatorio del arreglo array.
   // PISTA: Usa el método Math.random().
   // Tu código:

   /* MEJOR ALGORITMO*/
 
      for(let i = 0; i < array.length; i++ ){
               return array[Math.floor(Math.random() * array.length)]  
      }
   
      
}

// let unArray = [8,6,9,20,25,23]
// console.log()


console.log(obtenerElementoAleatorio([8,6,9,20,25,23]))
module.exports = obtenerElementoAleatorio;
