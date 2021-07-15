import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js"; //Necesitamos los selectores del reloj y de los dos botones que activan y desaactivan
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  /*Selector, lo que se va a mover y los enlaces dentro de menu para que se quite el menu al seleccionar uno*/

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma-morning.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jul 24, 2021 00:00:00", "Feliz cumpleaños");
  scrollTopButton(".scroll-top-btn");
});

//No se incluye en el DOMContentLoaded deido a que no muestra nada
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});
