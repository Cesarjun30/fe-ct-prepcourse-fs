function duplicarElementos(array) {
  // Duplica (multiplica x2) cada elemento del array de números.
  // Devuelve un array con los duplicados.
  // Tu código:

   let newArray = array.map((element) => element * 2)
   return newArray

  /***********  CON BUCLE FOR *********/
  let multiplicado = []
  for(let i = 0; i < array.length; i++ ){
     multiplicado.push( array[i] * 2)
       
  }
  return multiplicado 
}

module.exports = duplicarElementos;
