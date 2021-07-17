const d = document,
  n = navigator;

export default function getGeolocation(id) {
  const $id = d.getElementById(id),
    options = {
      enableHighAccuracy: true, //Que tome la mejor lectura
      timeout: 5000, //Tiempo que va a esperar para tomar la lectura
      maximumAge: 0, //Para que no se gguarde en cache las lecturas
    };

  //Los parametros de las funciones no tienen que hacer referencia a lguna otra cosa
  //De hecho pueden llevar cualquier nombre los parametros
  const success = (position) => {
    let coords = position.coords;
    console.log(position);

    $id.insertAdjacentHTML(
      "afterbegin",
      `<p>Tu posicion actual es: </p>
      <ul>
      <li>Latitud:${coords.latitude}</li>
      <li>Longitud:${coords.longitude}</li>
      <li>Precision:${coords.accuracy} metros </li>
      </ul>
      <a href="https://www.google.com/maps/@${coords.latitude}, ${coords.longitude},20z" target="_blank" rel="noopener">Ver en google maps</a>
      `
    );
  };
  const error = (err) => {
    $id.insertAdjacentHTML(
      "afterbegin",
      `<p><mark>Error ${err.code}: ${err.message}</mark></p>`
    );
  };

  //Este metodo necesita tres parametros, en caso de exito,fracaso y opciones
  n.geolocation.getCurrentPosition(success, error, options);
}
