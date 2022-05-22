onload = () =>{
  document.getElementById("b0").onclick = () => display(0);
  document.getElementById("b1").onclick = () => display(1);
  document.getElementById("b2").onclick = () => display(2);
  document.getElementById("b3").onclick = () => display(3);
  document.getElementById("b4").onclick = () => display(4);
  document.getElementById("b5").onclick = () => display(5);
  document.getElementById("b6").onclick = () => display(6);
  document.getElementById("b7").onclick = () => display(7);
  document.getElementById("b8").onclick = () => display(8);
  document.getElementById("b9").onclick = () => display(9);
  document.getElementById("bdiv").onclick = () => display("/");
  document.getElementById("bmult").onclick = () => display("*");
  document.getElementById("bsubt").onclick = () => display("-");
  document.getElementById("badic").onclick = () => display("+");
  document.getElementById("bvirg").onclick = () => display(",");
  document.getElementById("start").onclick = () => display("=");
  document.getElementById("bclean").onclick = () => limpar();
  document.getElementById("start").onclick = () => calculo();
  document.getElementById("bcleanlast").onclick = () => cleanlast();
  /* document.getElementById("inverter").onclick = () => inverter(); */
  document.getElementById("bparent").onclick = () => parenteses();
}
var resultado = document.getElementById("numeros");

function limpar(){
  resultado.innerHTML = "";
}

function display(value){
  resultado.innerHTML += value;
}
function parenteses(){
  const string = resultado.innerHTML;  
  const e = string.lastIndexOf("(");
  const ee = string.lastIndexOf(")");
  for(let i = 1; i<=1; i++){
    if (e == -1){
      resultado.innerHTML += "(";
    }else{
      if(e > ee){
        resultado.innerHTML += ")";
      }else{
        resultado.innerHTML += "(";
      }
    }
  }
}
/*
function inverter(){
   const valorInicial = resultado.innerHTML;
   const caracteres = valorInicial.substring(valorInicial.indexOf("+") +1);
   const valorFinal = (caracteres * (-1));
   const total = parseFloat(valorInicial.substring(0,valorInicial.indexOf("+")).concat(valorFinal));
   resultado.innerHTML = total;
   if (isNaN(total)){
  const caracteres = valorInicial.substring(valorInicial.indexOf("-") +1);
  const valorFinal = (caracteres * (-1));
  const total = valorInicial.substring(0,valorInicial.indexOf("+")).concat(valorFinal);
  resultado.innerHTML = total;
   }
}
*/
function cleanlast(){
  const string = resultado.innerHTML;
  resultado.innerHTML = string.slice(0, -1);
}

function calculo(){
  const p = resultado.innerHTML;
  const q = eval(p);
  resultado.innerHTML = q;
}

