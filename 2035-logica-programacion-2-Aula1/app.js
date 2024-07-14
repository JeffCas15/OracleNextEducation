let numeroSecreto = 0;
let numeroIntentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTexto(elemento, texto){
    let titulo = document.querySelector(elemento);
    titulo.innerHTML = texto;
    return;
}

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById("valorUsuario").value);
    
    if(listaNumerosSorteados.length == numeroMaximo){
    asignarTexto("p", "ya se sortearon todos los números posibles");
    }else{
        if(numeroSecreto === numeroDeUsuario){
            asignarTexto("p", `Acertaste el número en ${numeroIntentos} ${(numeroIntentos === 1) ? "intento" : "intentos"}`);
            document.getElementById("reiniciar").removeAttribute("disabled");
        }else if(numeroSecreto > numeroDeUsuario){
            asignarTexto("p", "El número es mayor");
        }else{
            asignarTexto("p", "El número es menor");
        }
    }    

    numeroIntentos++;

    limpiarCaja();
}


function limpiarCaja(){
    document.querySelector("#valorUsuario").value = "";
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;
    
    if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto(); //recursividad, utilizando una función que se llama a si misma
    }else{
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de inicio
    //inicializar el número de intentos
    //generar el número aleatório
    condicionesIniciales();
    //desabbilidar botón de nuevo juego
    document.getElementById("reiniciar").setAttribute("disabled", "true");
}

function condicionesIniciales(){
    asignarTexto("h1", "Juego del Número secreto");
    asignarTexto("p", `Inserta un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}

condicionesIniciales();
