const d = document;

export default function draw(btn, selector) {
  const getWinner = (selector) => {
    //Al aplicar un querySelectorAll se obtine de regreso un Node list
    const $players = d.querySelectorAll(selector),
      random = Math.floor(Math.random() * $players.length),
      winner = $players[random];

    // console.log($players);
    // console.log($players.length);
    // console.log(Math.random());
    // console.log(winner);
    // console.log(winner.textContent);

    //Si no se pone el textContent nos va a regresar el nodo completo
    return `El ganador es: ${winner.textContent}`;
  };

  d.addEventListener("click", (e) => {
    if (e.target.matches(btn)) {
      let result = getWinner(selector);
      alert(result);
      // console.log(result);
    }
  });
}

// const getWinnerComment = (selector) => {
//   const $players = document.querySelectorAll(selector),
//     random = Math.floor(Math.random() * $players.length),
//     winner = $players[random];

//   return `El ganador es: ${winner.textContent}`;
// };

// getWinnerComment("ytd-comment-thread-renderer #author-text span");
