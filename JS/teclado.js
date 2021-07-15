const d = document;
let x = 0;
let y = 0;

//Va a exportar y necsita tres parametros, el evento, el selector de la pelota y el escenario
//getBoundingClientReact devuelve el tamaño de un elemento y su posición relativa respecto a la ventana de visualización

export function moveBall(e, ball, stage) {
  const $ball = d.querySelector(ball);
  const $stage = d.querySelector(stage);
  const limitsBall = $ball.getBoundingClientRect();
  const limitsStage = $stage.getBoundingClientRect();
  // console.log(e.keyCode);
  // console.log(e.key);
  // console.log(limitsStage);
  // console.log(limitsBall);

  switch (e.keyCode) {
    case 37:
      //move("left");

      //Sirve para comparar sus posiciones y que no se vaya a salir la bola del escenario
      if (limitsBall.left > limitsStage.left) {
        e.preventDefault();
        x--;
      }
      break;

    case 38:
      //move("up");

      if (limitsBall.top > limitsStage.top) {
        //En la web la y negativa es hacia arriba
        e.preventDefault();
        y--;
      }
      break;

    case 39:
      if (limitsBall.right < limitsStage.right) {
        //move("right");
        e.preventDefault();
        x++;
      }
      break;

    case 40:
      if (limitsBall.bottom < limitsStage.bottom) {
        //move("down");
        e.preventDefault();
        y++;
      }
      break;
  }
  $ball.style.transform = `translate(${x * 10}px, ${y * 10}px)`;
}

export function shortcuts(e) {
  //   console.log(e);
  //   console.log(e.type);
  //   console.log(e.key);
  //   console.log(e.keyCode);

  if (e.key === "a" && e.altKey) {
    alert("Haz lanzado una alarta con el teclado");
  }

  if (e.key === "c" && e.altKey) {
    alert("Haz lanzado una confirmacion con el teclado");
  }

  if (e.key === "p" && e.altKey) {
    alert("Haz lanzado un aviso con el teclado");
  }
}
