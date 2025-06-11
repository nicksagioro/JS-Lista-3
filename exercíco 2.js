let i
let numero = parseInt(prompt("Digite um número para saber sua tabuada: "));

for (i = 1; i <= 10; i++) {
    alert(numero + "x" + i + "=" + (numero * i));
}