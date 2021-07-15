/*Necesita el boton que activa, osea panelBtn y el elemento a mover, osea el panel.*/

export default function hamburgerMenu(panelBtn, panel, menuLink) {
  const d = document;

  d.addEventListener("click", (e) => {
    if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} *`)) {
      /*Desencadena el evento el panelBtn, osea .panel-btn  y cualquiera de sus hijos, eso significa el */
      d.querySelector(panel).classList.toggle("is-active"); /*Selector panel */
      d.querySelector(panelBtn).classList.toggle("is-active");
      /*Lo que tengamos en la variable panelBtn, de esta forma se hace la animacion de la X, esto  ya viene por defecto en la documentacion de la libreria */
    }

    if (e.target.matches(menuLink)) {
      d.querySelector(panel).classList.remove("is-active");
      d.querySelector(panelBtn).classList.remove("is-active");
      /*Hace que el presionar uno de los enlaces del menu se eel menu*/
    }
  });
}
