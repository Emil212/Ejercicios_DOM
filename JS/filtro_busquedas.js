const d = document;

//Selector del input que va a realizar la busqueda y sobre que selector la va a realizar
//En el input se va a realizar la busqueda, tiene el selector card-filter, va a buscar sobre los elementos que tengan la clase card

export default function searchFilters(input, selector) {
  //Este tipo de filtros funciona con el evento keyup, si se ocupa keydown funciona incorrectamente
  d.addEventListener("keyup", (e) => {
    if (e.target.matches(input)) {
      //Creara un bucle donde por cada elemento que coincida con lo que se estara escribiendo le quite filter
      //Y los que no coincidan les agregue filter

      if (e.key === "Escape") {
        el.textContent = "";
        el.target.value = "";
      }

      d.querySelectorAll(selector).forEach((el) =>
        //includes() Sirve para ver si el texto existe es un booleano
        //Si el texto coincide...
        //Aqui es necesario agregar el toLowerCase() tanto a el del elemento como a lo que se escriba dentro del cuadro de busqueda para que funcione correctamente
        el.textContent.toLowerCase().includes(e.target.value.toLowerCase())
          ? el.classList.remove("filter")
          : el.classList.add("filter")
      );
    }
  });
}
