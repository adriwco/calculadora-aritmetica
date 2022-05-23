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
  document.getElementById("bclean").onclick = () => limpar();
  document.getElementById("start").onclick = () => calculo();
  document.getElementById("bcleanlast").onclick = () => cleanlast();
  document.getElementById("inverter").onclick = () => inverter();
  document.getElementById("bparent").onclick = () => parenteses();
}
var resultado = document.getElementById("numeros");

function limpar(){
  resultado.innerHTML = "";
}


function parenteses(){
  const string = resultado.innerHTML;  
  const e = string.lastIndexOf("(");
  const ee = string.lastIndexOf(")");
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

function inverter(){
  const valorInicial = resultado.innerHTML;
  const numero = valorInicial.substring(valorInicial.lastIndexOf("-") + 1);
  const valorFinal = -numero * (-1);
  const total = valorInicial.substring(0,valorInicial.lastIndexOf("-")).concat("+"+valorFinal);
  resultado.innerHTML = total; 
}

function cleanlast(){
  const string = resultado.innerHTML;
  resultado.innerHTML = string.slice(0, -1);
}

function display(value){
  resultado.innerHTML += value;
}

function calculo(){
  const r = resultado.innerHTML; 
  var op1 = r.indexOf("+");
  var op2 = r.indexOf("-");
  var op3 = r.indexOf("*");
  var op4 = r.indexOf("/");
  /*var quantidade = 0;*/

  if(op1 == -1 && op2 == -1 && op3 == -1 && op4 == -1){

    let resultaofinal = eval(resultado.innerHTML) + eval(resultado.innerHTML);
    resultado.innerHTML = resultaofinal;

  }else if(op1 == -1 && op2 !== -1 && op3 == -1 && op4 == -1){ // op2 !== -1

    if (op2 == 0){
    let resultaofinal = eval(resultado.innerHTML) + eval(resultado.innerHTML);
    resultado.innerHTML = resultaofinal;
    }else{
    resultado.innerHTML = eval(resultado.innerHTML);
    }
    
  }
  else{
    resultado.innerHTML = eval(resultado.innerHTML);
  }
  
  
  /*
  else if(op1 == -1 && op2 !== -1 && op3 == -1 && op4 == -1){

    for (var i = 0; i < frase.length; i++) {
      if (frase[i] == op1) {
        quantidade++
      }
    }

   */

}


