//Variables
let numeroMaximoPosible = 10;
let numeroSecreto = Math.floor(Math.random()*numeroMaximoPosible)+1;
let numeroUsuario = 0;
let contador = 1;
let maximoIntentos = 4;

while(numeroUsuario != numeroSecreto){
    let numeroUsuario = parseInt(prompt(`¿Me indicas un número entre 1 y ${numeroMaximoPosible}?`));

    console.log(numeroUsuario);

    if(numeroUsuario == numeroSecreto){
        alert(`Correcto, el número es: ${numeroUsuario}`);
        alert(`Acertaste al intento número ${contador}`);/*comillas invertidas permite 
        concatenación incluso con código javascript, esto es conocido como "template string"*/
    }else{
        if(numeroUsuario > numeroSecreto){
            alert(`El número es menor que ${numeroUsuario}`);
        
        }else if(numeroUsuario < numeroSecreto){
            alert(`El número es mayor que ${numeroUsuario}`);
        }
        contador++;

        if(contador > maximoIntentos){
            alert("No tienes más intentos :(");
            break;
        }
    }
}
