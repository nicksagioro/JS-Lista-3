function iniciarCronometro() {
  
  let cronometroDiv = document.getElementById("cronometro");
  if (!cronometroDiv) {
    cronometroDiv = document.createElement("div");
    cronometroDiv.id = "cronometro";
    cronometroDiv.style.fontSize = "24px";
    cronometroDiv.style.marginTop = "20px";
    document.body.appendChild(cronometroDiv);
  }

  const entrada = prompt("Digite um número de segundos (entre 1 e 59):");
  const segundos = Number(entrada);

  if (isNaN(segundos) || segundos < 1 || segundos > 59) {
    alert("Erro: Digite um número válido entre 1 e 59.");
    iniciarCronometro();
    return;
  }

  let contador = 0;
  cronometroDiv.textContent = `Cronômetro iniciado por ${segundos} segundo(s)...`;

  const intervalo = setInterval(() => {
    contador++;
    cronometroDiv.textContent = `${contador} segundo(s)`;

    if (contador >= segundos) {
      clearInterval(intervalo);
      cronometroDiv.textContent = "Tempo encerrado!";
    }
  }, 1000); 

}

iniciarCronometro();
