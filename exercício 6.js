function inicio() {
  let andares = parseInt(prompt("Digite o número de andares da pirâmide:"));

  if (isNaN(andares) || andares <= 0) {
    alert("Por favor, digite um número válido e maior que zero.");
    return;
  }

  let piramide = "";

  for (let linha = 1; linha <= andares; linha++) {
    let espacos = " ".repeat(andares - linha);
    let estrelas = "*".repeat(2 * linha - 1);
    piramide += espacos + estrelas + "\n";
  }

  alert(piramide);
}

inicio();
