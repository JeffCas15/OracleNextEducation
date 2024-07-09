let numeroSecreto = generarNumeroSecreto();
let numeroDeIntentos = 0;

function verificarIntento(){
    let numeroDeUsuario = document.getElementById("valorUsuario").value;
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);

    while(numeroDeIntentos < 4){
        if(numeroSecreto == numeroDeUsuario){
            alert("Correcto, haz acertado!")
        }else{
            alert("El número que ingresaste es incorrecto");
        }

        numeroDeIntentos++;
    }

    if(numeroDeIntentos == 4){
        alert("Agostaste tus intentos :(");
    }
    

    
}

function asignarTexto(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTexto("h1", "Juego del Número secreto");
asignarTexto("p", "Inserta un número del 1 al 10");