function calcularIMC() {
    let altura = parseFloat(document.getElementById('altura').value);
    let peso = parseFloat(document.getElementById('peso').value);

    if (!altura || !peso) {
        alert("Por favor, preencha altura e peso corretamente.");
        return;
    }

    let imc = peso / (altura * altura);
    let resultado = classificarIMC(imc);

    document.getElementById('resultado').innerText = 
        "Seu IMC é: " + imc.toFixed(2) + "\nClassificação: " + resultado.nome + 
        " (Obesidade: " + resultado.obesidade + ")";
}

function classificarIMC(imc) {
    if (imc < 18.5) {
        return { nome: "Magreza", obesidade: 0 };
    } else if (imc >= 18.5 && imc <= 24.9) {
        return { nome: "Normal", obesidade: 0 };
    } else if (imc >= 25 && imc <= 29.9) {
        return { nome: "Sobrepeso", obesidade: 1 };
    } else if (imc >= 30 && imc <= 39.9) {
        return { nome: "Obesidade", obesidade: 2 };
    } else {
        return { nome: "Obesidade Grave", obesidade: 3 };
    }
}
