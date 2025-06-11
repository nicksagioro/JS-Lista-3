function iniciarCronometro() {
    const entrada = prompt("Digite um número de segundos (entre 1 e 59):");
  
    const segundos = Number(entrada);
  
    if (isNaN(segundos) || segundos < 1 || segundos > 59) {
      alert("Erro: Digite um número válido entre 1 e 59.");
      iniciarCronometro(); 
      return;
    }
  
    let contador = 0;
    console.log(`Cronômetro iniciado por ${segundos} segundos:`);
  
    const intervalo = setInterval(() => {
      contador++;
      console.log(`${contador} segundo(s)`);
  
      if (contador >= segundos) {
        clearInterval(intervalo);
        console.log("Tempo encerrado!");
      }
    }, 99999);
  }
  
  iniciarCronometro();
  