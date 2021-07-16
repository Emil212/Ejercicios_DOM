const d = document;

export default function countdown(id, limitDate, finalMessage) {
  const $countdown = d.getElementById(id),
    //Al hacer opreaciones netre fechas es mejor convertir todo a milisegundos para hacerlas mas facil
    //Mediante la funcion getTime()
    //Fecha a llegar
    countdownDate = new Date(limitDate).getTime();

  let countdownTempo = setInterval(() => {
    let now = new Date().getTime(),
      //Saca la resta entre mi proximo cumpleaños y la actual, en milisegundos
      limitTime = countdownDate - now,
      days = Math.floor(limitTime / (1000 * 60 * 60 * 24)), //Factor de conversion de dias
      hours = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      ).slice(-2),
      //La segunda parte es el factor de conversion de horas
      minutes = (
        "0" + Math.floor((limitTime % (1000 * 60 * 60)) / (1000 * 60))
      ).slice(-2),
      seconds = ("0" + Math.floor((limitTime % (1000 * 60)) / 1000)).slice(-2);
    $countdown.innerHTML = `<h3>Faltan: ${days} dias ${hours} horas ${minutes} minutos ${seconds} segundos para tu proximo cumpleaños </h3>`;

    if (limitTime < 0) {
      clearInterval(countdownTempo);
      $countdown.innerHTML = `<h3>${finalMessage} </h3>`;
    }
  }, 1000);
}
