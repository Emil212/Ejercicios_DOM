const d = document;

export function shortcuts(e){
    console.log(e);
    console.log(e.type);
    console.log(e.key);
    console.log(e.keyCode);

    if(e.key==="a"&&e.altKey){
        alert("Haz lanzado una alarta con el teclado");
    }

    if(e.key==="c"&&e.altKey){
        alert("Haz lanzado una confirmacion con el teclado");
    }
    
    if(e.key==="p"&&e.altKey){
        alert("Haz lanzado un aviso con el teclado");
    }

}