function viajar(destino) {
  if (destino === "Brasil") {
    console.log("Gire a la izquierda");
  }else if(destino === "Republica Dominicana"){
console.log("Gire a la derecha ");
  }else{ console.log('Compadre estamos perdidos');}
}

viajar('Brasil');
viajar('Republica Dominicana');
viajar('Argentina');

function puedeManejar(edad){

if(edad >= 18){
    console.log('Si puede manejar ')
}else{
    console.log('Espera a tener 18 años de edad')
}
}

puedeManejar(18)
puedeManejar(17)