let largura = parseInt(prompt("Digite a largura do retângulo: "));
let altura = parseInt(prompt("Digite a altura do retângulo: "));

let resultado = "";

for (let i = 1; i <= altura; i++) {
    let linha = "";
    for (let j = 1; j <= largura; j++) {
        linha += "*";
    }
    resultado += linha + "<br>";
}

document.body.innerHTML = resultado;
