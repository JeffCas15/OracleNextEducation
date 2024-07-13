let numeroSecreto = generarNumeroSecreto();

function asignarTexto(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    console.log(numeroSecreto);
    console.log(numeroDeUsuario);
    console.log(numeroSecreto === numeroDeUsuario);
}

function generarNumeroSecreto() {
    return Math.floor(Math.random()*10)+1;
}

asignarTexto("h1", "Juego del Número secreto");
asignarTexto("p", "Inserta un número del 1 al 10");