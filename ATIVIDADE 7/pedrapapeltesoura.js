function jogarPedraPapelTesoura() {
    let escolhaUsuario = prompt("Escolha: pedra, papel ou tesoura").toLowerCase();

    if (escolhaUsuario !== "pedra" && escolhaUsuario !== "papel" && escolhaUsuario !== "tesoura") {
        alert("Escolha inválida! Tente novamente.");
        return;
    }

    let numeroAleatorio = Math.random();
    let escolhaComputador;

    if (numeroAleatorio < 0.33) {
        escolhaComputador = "pedra";
    } else if (numeroAleatorio < 0.66) {
        escolhaComputador = "papel";
    } else {
        escolhaComputador = "tesoura";
    }

    let resultado = "";

    if (escolhaUsuario === escolhaComputador) {
        resultado = "Empate!";
    } else if (
        (escolhaUsuario === "pedra" && escolhaComputador === "tesoura") ||
        (escolhaUsuario === "tesoura" && escolhaComputador === "papel") ||
        (escolhaUsuario === "papel" && escolhaComputador === "pedra")
    ) {
        resultado = "Você ganhou!";
    } else {
        resultado = "Computador ganhou!";
    }

    alert("Você escolheu: " + escolhaUsuario + "\nComputador escolheu: " + escolhaComputador + "\nResultado: " + resultado);
}