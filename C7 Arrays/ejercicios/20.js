function todosIguales(array) {
  // Si todos los elementos del arreglo son iguales, retornar true.
  // Caso contrario, retornar false.
  // Tu código:
  
for (let i = 0; i < array.length; i++) {
  if(array[i] === array[i + 1]){
    return true
  }else{return false}

}
}

//let array = [8,8,8,8,8]

//let sonIguales = array.every((item, ind) => item === item  ) 
 
console.log(todosIguales([8,8,8,8]))

module.exports = todosIguales;
