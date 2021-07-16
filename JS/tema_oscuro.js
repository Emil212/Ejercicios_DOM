//classDark es para no tener que especificar todas las clases que se van a ver a afectadas por el darktheme
//Es un data attribute

const d = document,
  ls = localStorage;

export default function darkTheme(btn, classDark) {
  const $themeBtn = d.querySelector(btn),
    $selectors = d.querySelectorAll("[data-dark]");
  //Se aplicara la regla a los elementos que tengan el data attribute especificado
  //De esta forma tambien trabja bootstrap y otros frameworks

  let moon = "🌙",
    sun = "☀️";

  const lightMode = () => {
    //El forEach se va a ocupar debido a que el querySelectorAll nos da una node list
    //La cual es un arrgleo
    $selectors.forEach((el) => el.classList.remove(classDark));
    $themeBtn.textContent = moon;
    ls.setItem("theme", "light");
  };
  const darkMode = () => {
    $selectors.forEach((el) => el.classList.add(classDark));
    $themeBtn.textContent = sun;
    ls.setItem("theme", "dark");
  };

  //Se restructura el codigo para de esta forma poder utilizar el API localStorage

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      if ($themeBtn.textContent === moon) {
        darkMode();
      } else {
        lightMode();
      }
    }
  });

  //Dentro de la funcion que se va a importar no podemos tener un evento del mismo tipo que en a funcion principal
  //Por ejemplo, en este caso no se puede tener un DOMContentLoaded ya que ese evento ya existe en la funcion index.js
  //Debido a ello se mueve la funcion del archivo index afuera del DOMContentLoaded

  d.addEventListener("DOMContentLoaded", (e) => {
    //Se le pasa por parametro el nombre de la varibale y su valor

    if (ls.getItem("theme") === null) ls.setItem("theme", "light");
    if (ls.getItem("theme") === "light") lightMode();
    if (ls.getItem("theme") === "dark") darkMode();
  });
}
