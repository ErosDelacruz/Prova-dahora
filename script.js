
// EXE 01
var eu = document.getElementById("Felipe")
var veja = document.getElementById("Mostrar")

function Ignite () {
veja.innerHTML = `Ola ${Felipe.value} tudo bem?`
}

// EXE 02

var Me = document.getElementById("Metro")
var Ce = document.getElementById("Centimetros")

function transform () {
                   Ce.innerHTML = `${parseFloat(Me.value)} e igual a ${parseFloat(Me.value) * 100} cm` 
}


// EXE 03

let numero = document.getElementById("principal")
let n1 = document.getElementById("sucessor")
let n2 = document.getElementById("antecessor")

function elfbar(){
    n1.innerHTML = parseFloat(numero.value) + 1;
    n2.innerHTML = parseFloat(numero.value) -1 ;
}

// EXE 04

function compararNumeros() {
                   var nu1 = parseFloat(document.getElementById('number1').value);
                   var nu2 = parseFloat(document.getElementById('number2').value);
                   var resultado = "";
               
                   if (num1 > num2) {
                       resultado = "O maior número é: " + num1;
                   } else if (num2 > num1) {
                       resultado = "O maior número é: " + num2;
                   } else {
                       resultado = "Os números são iguais.";
                   }
               
                   document.getElementById('resultado').innerText = resultado;
               }   
