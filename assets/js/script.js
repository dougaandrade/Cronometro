window.onload = function () {
    let segundos = 00;
    let tens = 00;
    let Opentens = document.getElementById("tens");
    let Opensegundos = document.getElementById("segundos");
    let botao_start = document.getElementById("btn-start");
    let botao_stop = document.getElementById("btn-stop");
    let botao_reset = document.getElementById("btn-reset");
    let Interval;


    botao_start.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    botao_stop.onclick = function(){
        clearInterval(Interval);
    }
    botao_reset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        segundos ="00";
        Opentens.innerHTML = tens;
        Opensegundos.innerHTML = segundos;
    }

    function startTimer(){
        tens++;

        if(tens <= 9){
            Opentens.innerHTML = "0" + tens;
        }

        if(tens > 9){
            Opentens.innerHTML = tens;
        }

        if(tens > 99){
            console.log("segundos");
            segundos++;
            Opensegundos.innerHTML = "0" + segundos;
            tens = 0;
            Opentens.innerHTML = "0" + 0;
        }

        if(segundos > 9){
            Opensegundos.innerHTML = segundos;
        }
    }
}