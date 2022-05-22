function limpar(){
  document.getElementById("numeros").innerHTML = "";
}
function display(value){
  document.getElementById("numeros").innerHTML += value;
}
function parenteses(){
  const string = document.getElementById("numeros").innerHTML;
  const e = string.indexOf("(")
  if (e == -1){
    document.getElementById("numeros").innerHTML += "("
  }else{
    document.getElementById("numeros").innerHTML += ")"
  }
}
function calculo(){
  const p = document.getElementById("numeros").innerHTML;
  const q = eval(p);
  document.getElementById("numeros").innerHTML = q;
}
