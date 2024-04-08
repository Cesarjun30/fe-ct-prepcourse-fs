function continueStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un array y retornarlo.
  // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
  // se continúa con la siguiente iteración.
  // PISTA: Utiliza el statement 'continue'.
  // Tu código:

  let newArray = [];
 
  for (let i = 2; i < 20; i  = i + 2) {
    let nuevoValor = num + i;
    if (i === 10 / 2) {
     continue 
     
    }else{ newArray.push(nuevoValor);} 
     
    
       
     
    
   }
    
    
    //console.log(i);
    
  
  return newArray;
}
console.log(continueStatement(50));

module.exports = continueStatement;
