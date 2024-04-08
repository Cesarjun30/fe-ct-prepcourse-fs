function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:

/* CON REDUCE */

let newArray = resultadosTest.reduce((ac,valoractual) => (ac + valoractual) )
return newArray / resultadosTest.length

/* CON BUCLE FOR  */

  let promedio = 0
  for(let i = 0; i < resultadosTest.length; i++){
      
    promedio += resultadosTest[i]

  }

  return promedio / resultadosTest.length
}

console.log(promedioResultadosTest([80,80,80,80]))

module.exports = promedioResultadosTest;
