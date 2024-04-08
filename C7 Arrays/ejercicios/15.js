function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:

  //verificamos
  // if(array.length === 0){
  //   return 0
  // }

  //   let masGrande = array[0];

  //   for (let i = 0; i <= array.length; i++) {
  //     if (array[i] > masGrande) {
  //       masGrande = array[i];

  //     }

  //   }
  //   return array.indexOf(masGrande);

  let reducido = array.reduce((acumulado, actual, indice, reduceArray) => {
    if (actual > reduceArray[acumulado]) {
      return indice;
    } else {
      return acumulado;
    }
  }, 0);

  return reducido;
}

console.log(encontrarIndiceMayor([]));
console.log(encontrarIndiceMayor([2, 20, 8, 10001, 48, 80, 29, 1000]));

// let arrayNumeros = [0,1,2,3,4]
// // .reduce((acumulado, actual) =>{
// //    console.log({acumulado, actual})
// //     return acumulado
// // })

// let reducido = arrayNumeros.reduce((acumulado, actual, indice, array ) => {

//   if(actual > array[acumulado]){return indice}else{
//     return acumulado
//   }
// },0)

// console.log(reducido)

//let newArray = ["Naruto","Sasuke","Sakura","Kakashi"]

/*PRACTICA DE REDUCE */

// newArray.reduce((acc, item,) => {
//   console.log({acc, item});
//   console.log(`${item} tiene ${item.length} letras` )
//   return acc + item.length;
// },0)

const misiones = [
  { nombre: "Atrapar un gato", rango: "C" },
  { nombre: "Rescatar al Kazekage", rango: "S" },
  { nombre: "Escoltar al Ingeniero ", rango: "A" },
  { nombre: "Actuar como representate de una familia", rango: "C" },
  { nombre: "Escoltar un barco hasta el Pais de la nube ", rango: "B" },
  { nombre: "Verse con el informante de Sasori ", rango: "S" },
  { nombre: "Escoltar un representate del señor feudal", rango: "A" },
  { nombre: "Capturar a 2 miembros de Akatsuki", rango: "S" },
  { nombre: "Capturar al Sambi", rango: "A" },
  { nombre: "Recoger Basura del rio", rango: "C" },
];

// agrupar por su Rango

const agrupacion = misiones.reduce((obj, mision) => {
  console.log({ mision });
  if(!obj[mision.rango]){
    obj[mision.rango] = [];
  }
  obj[mision.rango].push(mision.nombre);

  return obj;
}, {});

console.log(agrupacion);

module.exports = encontrarIndiceMayor;
