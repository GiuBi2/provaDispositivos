window.addEventListener('load', e => {
    "use strict";//restrito a funcionar em navegadores comES6 >
    if("serviceWorker" in navigator){
        navigator.serviceWorker.register("./sw.js");
    }
}); 
let botaoCalcular = document.getElementById("btn_calcular");

function calcularpresenca(){
   var nome = document.getElementById("name").value;
   var cargahr = document.getElementById("carga").value;
   var aulas = document.getElementById("aulas").value;
   var falta =document.getElementById("falta").value;
let resultado;

   var suafalta = cargahr*0.25;

  
if(falta > suafalta){
    resultado = "Você está reprovado por falta em " + nome + ` , não importa se vai faltar mais`;
} else {
    var faltas = suafalta - falta;
    resultado = `Em curso, faltas pemitidas: ${faltas}, dias disponiveis: ${Math.floor( faltas /  aulas)}`

}
document.getElementById("resultado").textContent = resultado
}
btn_calcular.addEventListener('click', calcularpresenca);