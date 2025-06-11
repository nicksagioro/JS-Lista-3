  const loginCorreto = "Nicolas.Silva";
  const senhaCorreta = "8888";
  let tentativas = 0;

  alert("Seja bem-vindo!");

  while (tentativas < 3) {
    let loginDigitado = prompt("Digite seu login:");
    let senhaDigitada = prompt("Insira sua senha:");

    if (loginDigitado === loginCorreto && senhaDigitada === senhaCorreta) {
      alert("Acesso permitido!");
      break;
    } else {
      tentativas++;

      if (loginDigitado !== loginCorreto) {
        alert("Login incorreto.");
      }

      if (senhaDigitada !== senhaCorreta) {
        alert("Senha incorreta.");
      }

      if (tentativas === 2) {
        alert("Última tentativa, mais um erro e seu acesso será bloqueado!");
      }

      if (tentativas === 3) {
        alert("Acesso bloqueado. Número de tentativas excedido.");
      }
    }
  }



;
