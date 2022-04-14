  //inicialisacion de bariables
  let tarjetasDestapadas = 0;

  let tarjeta1 = null;
  let tarjeta2 = null;
  let primerResultado = null;
  let segundoResultado = null;
  let movimientos = 0;
  let aciertos = 0;
  let temporizador = false
  let timer = 30;
  let timerInicial = 30;
  let tiempoRegresivoid = null;

  //apuntando a documento html
  let mostrarMovimientos = document.getElementById('Movimientos');
  let mostrarAciertos = document.getElementById('aciertos'); 
  let mostrarTiempo = document.getElementById('t-restante') 
  //Generacion de numeros aleatorios
  let numeros = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8];
numeros = numeros.sort(()=>{return Math.random()-0.5});
console.log(numeros);

//funciones
function contarTiempo(){
 tiempoRegresivoid = setInterval(()=>{
timer --;
mostrarTiempo.innerHTML = `Tiempo: ${timer} segundos`;
if (timer == 0){
clearInterval(tiempoRegresivoid)
bloquearTarjetas();
}
},1000)
}

function bloquearTarjetas(){
    for (i = 0; i<=15;i++){
        let tarjetaBloqueada = document.getElementById(i);
        tarjetaBloqueada.innerHTML = numeros[i];
        tarjetaBloqueada.disabled = true;
    }
}

//funcion prinsipal
function destapar(id){

tarjetasDestapadas++;
console.log(tarjetasDestapadas);

if(tarjetasDestapadas == 1){
    //Mostrar primer numero

    if (temporizador == false){
        contarTiempo();
        temporizador = true;
    }

tarjeta1 = document.getElementById(id);
primerResultado = numeros[id];
tarjeta1.innerHTML = primerResultado;

//Desavilitar primer boton
tarjeta1.disabled = true;
}else if(tarjetasDestapadas ==2){
    //mostrar segundo numero
    tarjeta2 = document.getElementById(id);
    segundoResultado = numeros[id];
    tarjeta2.innerHTML = segundoResultado;

    //Desavilitar primer boton
    tarjeta2.disabled = true;

    //incrementar movimientos
movimientos++;
mostrarMovimientos.innerHTML = `Movimientos: ${movimientos}`;

if (primerResultado == segundoResultado){
//Encerar contador tarjetas destapadas
tarjetasDestapadas = 0;

//Aumentar aciertos
aciertos++;
mostrarAciertos.innerHTML = `aciertos: ${aciertos}`;

if (aciertos == 8){
    clearInterval(tiempoRegresivoid);
mostrarAciertos.innerHTML = `aciertos: ${aciertos} 😱`
mostrarTiempo.innerHTML = `Fantastico! solo demoraste $[timerInicial - timer] segundos`;
mostrarAciertos.innerHTML = `Movimientos: ${movimientos} 🤘😎`
}
 }else{
     //mostrar momentaneamente y volver a tapar
setTimeout(()=>{
    tarjeta1.innerHTML = ' ';
    tarjeta2.innerHTML = ' ';
    tarjeta1.disabled = false;
    tarjeta2.disabled = false;
    tarjetasDestapadas = 0;
},800);
 }
}
}

