import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js"; //Necesitamos los selectores del reloj y de los dos botones que activan y desaactivan
import { moveBall, shortcuts } from "./teclado.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  /*Selector, lo que se va a mover y los enlaces dentro de menu para que se quite el menu al seleccionar uno*/

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma-morning.mp3", "#activar-alarma", "#desactivar-alarma");
});

d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
