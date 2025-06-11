let numeroSecreto = parseInt(prompt("Pessoa 1: Escolha um número secreto entre 1 e 100 (não deixe a outra pessoa ver):"));

if (isNaN(numeroSecreto) || numeroSecreto < 1 || numeroSecreto > 100) {
  alert("Número inválido. Reinicie o jogo e escolha um número entre 1 e 100.");
} else {
  let tentativa;
  let tentativas = 0;
  let acertou = false;

  do {
    tentativa = parseInt(prompt("Pessoa 2: Tente adivinhar o número entre 1 e 100:"));
    tentativas++;

    if (isNaN(tentativa)) {
      alert("Por favor, digite um número válido.");
      continue;
    }

    let diferenca = Math.abs(tentativa - numeroSecreto);

    if (tentativa === numeroSecreto) {
      alert("Parabéns! Você acertou o número em " + tentativas + " tentativa(s)!");
      acertou = true;
    } else if (diferenca <= 2) {
      alert("Quase lá!");
    } else if (diferenca <= 5) {
      alert("Tá quente!");
    } else if (diferenca <= 10) {
      alert("Tá frio!");
    } else if (tentativa < numeroSecreto) {
      alert("Muito baixo!");
    } else {
      alert("Muito alto!");
    }
  } while (!acertou);
}
