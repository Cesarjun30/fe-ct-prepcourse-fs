function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:

  // Filtramos los meses buscados
  let mesesEncontrados = array.filter(
    (mes) => mes === "Enero" || mes === "Marzo" || mes === "Noviembre"
  );

  // Verificamos si se encontraron todos los meses buscados
  if (mesesEncontrados.length === 3) {
    // Si sí, retornamos el arreglo de meses encontrados
    return mesesEncontrados;
  } else {
    // Si no, retornamos el mensaje indicando que no se encontraron todos los meses
    return "No se encontraron los meses pedidos";
  }
}

console.log(mesesDelAño(["Enero", "Marzo", "Noviembre"]));

module.exports = mesesDelAño;
