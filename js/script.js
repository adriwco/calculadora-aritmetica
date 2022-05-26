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
  document.getElementById("bvirg").onclick = () => display(".");
  document.getElementById("bclean").onclick = () => limpar();
  document.getElementById("start").onclick = () => calculo();
  document.getElementById("bcleanlast").onclick = () => cleanlast();
  document.getElementById("inverter").onclick = () => inverter();
  document.getElementById("bparent").onclick = () => parenteses();
  document.getElementById("abre").onclick = () => display("(");
  document.getElementById("fecha").onclick = () => display(")");
  document.getElementById("elevacao").onclick = () => display("**");
  document.getElementById("alterar").onclick = () => alterar();
  document.getElementById("alterar2").onclick = () => alterar2();
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
  const valorInicial = eval("-("+resultado.innerHTML+")");
  resultado.innerHTML = valorInicial; 
}
function cleanlast(){
  const string = resultado.innerHTML;
  resultado.innerHTML = string.slice(0, -1);
}
function display(value){
  resultado.innerHTML += value;
}
function calculo(){
  var r = resultado.innerHTML;
  var op1 = r.indexOf("*");
  var op2 = r.indexOf("/");
  if((op2 == 0) || (op1 == 0)){
    resultado.innerHTML = "0";
  }else if(eval(resultado.innerHTML) == Infinity){
    resultado.innerHTML = "Inválido..."
  }else if(isNaN(eval(resultado.innerHTML))){
    resultado.innerHTML = "Indefinido..."
  }else{
    resultado.innerHTML = eval(resultado.innerHTML);
  }
}
function alterar(){
  var alterar = document.getElementById("separado");
  alterar.classList.toggle("z_index");
}
function alterar2(){
  var alterar2 = document.getElementById("separado2");
  alterar2.classList.toggle("z_index");
}
/* 
var frase = "o homem é o lobo do homem";
var letra = "o";
var quantidade = 0
for (var i = 0; i < frase.length; i++) {
  if (frase[i] == letra) {
    quantidade++
  }
}
document.write(quantidade)
// reposta : 4
replece()
*/