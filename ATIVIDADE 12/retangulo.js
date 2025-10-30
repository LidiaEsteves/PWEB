
function Retangulo(base, altura) {
    this.base = base;
    this.altura = altura;
    this.calcularArea = function() {
        return this.base * this.altura;
    }
}

var meuRetangulo = new Retangulo(5, 8);
document.getElementById("areaRetangulo").innerText = "Área: " + meuRetangulo.calcularArea();


class Conta {
    constructor(nome, correntista, banco, numero, saldo) {
        this.nome = nome;
        this.correntista = correntista;
        this.banco = banco;
        this.numero = numero;
        this.saldo = saldo;
    }

    mostrarDados() {
        return `Nome: ${this.nome}<br>
Correntista: ${this.correntista}<br>
Banco: ${this.banco}<br>
Número da conta: ${this.numero}<br>
Saldo: R$ ${this.saldo}`;
    }
}

class Corrente extends Conta {
    constructor(nome, correntista, banco, numero, saldo, saldoEspecial) {
        super(nome, correntista, banco, numero, saldo);
        this.saldoEspecial = saldoEspecial;
    }

    mostrarDados() {
        return super.mostrarDados() + `<br>Saldo Especial: R$ ${this.saldoEspecial}`;
    }
}

class Poupanca extends Conta {
    constructor(nome, correntista, banco, numero, saldo, juros, dataVencimento) {
        super(nome, correntista, banco, numero, saldo);
        this.juros = juros;
        this.dataVencimento = dataVencimento;
    }

    mostrarDados() {
        return super.mostrarDados() + `<br>Juros: ${this.juros}%<br>Data de Vencimento: ${this.dataVencimento}`;
    }
}

let contaCorrente = new Corrente("Lucas Silva", "Lucas", "Banco do Brasil", "1234-5", 2000, 500);
let contaPoupanca = new Poupanca("Ana Souza", "Ana", "Caixa Econômica", "6789-0", 3000, 1.5, "30/11/2025");

document.getElementById("dadosCorrente").innerHTML = contaCorrente.mostrarDados();
document.getElementById("dadosPoupanca").innerHTML = contaPoupanca.mostrarDados()