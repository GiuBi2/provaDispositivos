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
   var dias = document.getElementById("aulas").value;
   var falta =document.getElementById("falta").value;
let resultado;

   var suafalta = cargahr*0.25;
   var faltas = suafalta - falta;
let diaspossiveis = suafalta/dias;
  
if(falta > suafalta){
    resultado = "Você está reprovado por falta em " + nome + ` , não importa se vai faltar mais`;
} else {
    resultado = "Você está em curso em " + nome + " , pode faltar " + faltas + " aulas e " + diaspossiveis+ " dias" ;
}
document.getElementById("resultado").textContent = resultado
}
btn_calcular.addEventListener('click', calcularpresenca);