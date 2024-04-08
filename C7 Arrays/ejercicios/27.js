function dePalabrasAFrase(palabras) {
  // El argumento "palabras" es un arreglo de strings.
  // Retorna un string donde todas las palabras estén concatenadas,
  // con un espacio entre cada palabra.
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
  // Tu código:
/* Usando Metodo Join */ 

let nuevaPalabra = palabras.join(" ")
 return nuevaPalabra

/******* Usando Bucle for  */ 
 
let palabra = ""

  for(let i = 0; i < palabras.length; i++){
    if(i === palabras.length - 1){
     
      palabra += palabras[i]
    }else{palabra += palabras[i] + " "}
    
    
    
  }
  
  return palabra   
}

console.log(dePalabrasAFrase(['Hello', 'world!']))



module.exports = dePalabrasAFrase;
