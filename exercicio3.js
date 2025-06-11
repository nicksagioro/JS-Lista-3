function exibirNumerosPares(inicio, fim) {
  if (inicio > fim) {
    [inicio, fim] = [fim, inicio]; 
  }

  let pares = []; 

  for (let i = inicio; i <= fim; i++) {
    if (i % 2 === 0) {
      pares.push(i); 
    }
  }

  alert("Números pares entre " + inicio + " e " + fim + ":\n" + pares.join(", "));
}


let numero1 = parseInt(prompt("Digite o primeiro número inteiro:"));
let numero2 = parseInt(prompt("Digite o segundo número inteiro:"));


if (!isNaN(numero1) && !isNaN(numero2)) {
  exibirNumerosPares(numero1, numero2);
} else {
  alert("Por favor, insira números inteiros válidos.");
}
