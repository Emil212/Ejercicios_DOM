const d = document;

export default function responsiveTester(form) {
  const $form = d.getElementById(form);
  let tester;

  d.addEventListener("submit", (e) => {
    if (e.target === $form) {
      e.preventDefault();
      //alert("formulario enviado");
      //El segundo parametro que se le pasa tiene que llevar el mismo nombre que el de la variable
      //La notacion del punto permite acceder desde el formulario al nombre que se coloco en name en el html y a su valor
      //Ejemplo $form.dirreccion.value

      tester = window.open(
        $form.direccion.value,
        "tester",
        `innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`
      );
      console.log(tester);
    }

    d.addEventListener("click", (e) => {
      if (e.target === $form.cerrar) tester.close();
    });
  });
}
