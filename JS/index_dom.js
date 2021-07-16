import hamburgerMenu from "./menu_hamburguesa.js";
import { digitalClock, alarm } from "./reloj.js"; //Necesitamos los selectores del reloj y de los dos botones que activan y desaactivan
import { moveBall, shortcuts } from "./teclado.js";
import countdown from "./cuenta_regresiva.js";
import scrollTopButton from "./boton_scroll.js";
import darkTheme from "./tema_oscuro.js";
import responsiveMedia from "./objeto_responsive.js";

const d = document;

d.addEventListener("DOMContentLoaded", (e) => {
  hamburgerMenu(".panel-btn", ".panel", ".menu a");
  /*Selector, lo que se va a mover y los enlaces dentro de menu para que se quite el menu al seleccionar uno*/

  digitalClock("#reloj", "#activar-reloj", "#desactivar-reloj");
  alarm("assets/alarma-morning.mp3", "#activar-alarma", "#desactivar-alarma");
  countdown("countdown", "Jul 24, 2021 00:00:00", "Feliz cumpleaños");
  scrollTopButton(".scroll-top-btn");
  //Cuando se van a usar clases en esta parte y se usar classList.add/remove no se tiene que poner el punto al comienzo de la clase

  responsiveMedia(
    "youtube",
    "(min-width:1024px)",
    `<a href="https://www.youtube.com/watch?v=pT_Y3O9czww" target="_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/pT_Y3O9czww?start=6" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
  );

  responsiveMedia(
    "gmaps",
    "(min-width:1024px)",
    `<a href="https://goo.gl/maps/JrFkLfAr4p7J6VTd8" target="_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3760.9934142925254!2d-99.13758508565617!3d19.498919143610664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1f9b3e9aa18eb%3A0x33b56a6d5f94b47a!2sESIME%20Zacatenco!5e0!3m2!1ses-419!2smx!4v1626432731531!5m2!1ses-419!2smx" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>`
  );
});

//No se incluye en el DOMContentLoaded deido a que no muestra nada
d.addEventListener("keydown", (e) => {
  shortcuts(e);
  moveBall(e, ".ball", ".stage");
});

//Sacando la funcionnde aqui ya no se va a cancelar
darkTheme(".dark-theme-btn", "dark-mode");
