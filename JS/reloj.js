const d = document;

//Para  tener la referencia de un setIntervla o un setTimeOut
//Y de esta forma poder detener el reloj, es necesario guardarlo n una variable
//Se usara la variable clockTempo

export function digitalClock(clock, btnPlay, btnStop){

    let clockTempo;

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            clockTempo = setInterval(()=>{
                let clockHour = new Date().toLocaleTimeString();
                d.querySelector(clock).innerHTML = `<h3>${clockHour}</h3>`;
            }, 1000);

            e.target.disabled = true; //El boton que va a desencadenar el evento

        }

        if(e.target.matches(btnStop)){
            clearInterval(clockTempo); //Limpia el intervalo del  reloj
            d.querySelector(clock).innerHTML = null;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}

export function alarm(sound, btnPlay, btnStop){
    let alarmTempo;
    const $alarm=d.createElement("audio");//No es necesario crear  una etiqueta visible
    $alarm.src=sound;//Va a poner lo  que este en la ruta de la vaaribale sound

    d.addEventListener("click", e=>{
        if(e.target.matches(btnPlay)){
            alarmTempo = setTimeout(()=>{
                $alarm.play();
            },2000);

            e.target.disabled = true; 


        }

        if(e.target.matches(btnStop)){
            clearTimeout(alarmTempo);
            $alarm.pause();
            $alarm.currentTime=0;
            d.querySelector(btnPlay).disabled = false;
        }
    })
}




















