const d = document;

//Se imprime el conjunto de las secciones a observar
//console.log("entries", entries);
//Se imprime seccion por seccion a observar
//console.log(entry);
//Se asigna una constante id al atributo id de cada entry
//Si el entry que

export default function scrollSpy() {
  const $sections = d.querySelectorAll("section[data-scroll-spy]");

  const cb = (entries) => {
    entries.forEach((entry) => {
      const id = entry.target.getAttribute("id");

      if (entry.isIntersecting) {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add(
          "active"
        );
      } else {
        d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove(
          "active"
        );
      }
    });
  };
  const observer = new IntersectionObserver(cb, {
    //root
    //disminuye la distancia entre las secciones de interaccion
    //rootMargin: "-300px",
    threshold: [0.5, 0.75], //Hasta que tiene el 50% de la visualizacion de la seccion
  });

  //Esta funcion se encarga de hacer la observacion
  $sections.forEach((el) => observer.observe(el));
}
