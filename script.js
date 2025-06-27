// script.js - Programa calculo media

function calcularMedia() {
    // Pede para o usuário digitar 4 números
    let n1 = prompt("Digite o primeiro número:");
    let n2 = prompt("Digite o segundo número:");
    let n3 = prompt("Digite o terceiro número:");
    let n4 = prompt("Digite o quarto número:");

    // Converte as entradas para números
    n1 = Number(n1);
    n2 = Number(n2);
    n3 = Number(n3);
    n4 = Number(n4);

    // Calcula a média
    let media = (n1 + n2 + n3 + n4) / 4;

    // Mostra a média no console
    console.log("A média dos números é: " + media);
}
