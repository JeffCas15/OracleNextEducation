let titulo = document.querySelector("h1");
titulo.innerHTML = "Hora Del Desafío";



function clicked(){
    console.log("El botón fue clicado");
}

function city(){

    respuestaCiudad = prompt("Menciona una ciudad de Brasil");
    alert(`Estuve en ${respuestaCiudad} y me acordé de ti`);
}

function alerta(){
    alert("Yo amo JS");
}

function suma(){
    let numero1 = parseInt(prompt("Ingresa el primer número"));
    let numero2 = parseInt(prompt("Ingresa el segundo número"));
    alert(`${numero1} + ${numero2} =` + (numero1+numero2));
}