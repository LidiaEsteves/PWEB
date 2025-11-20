function maior(a, b, c) {
    return Math.max(a, b, c);
}

function ordenar(a, b, c) {
    return [a, b, c].sort((x, y) => x - y);
}

function ehPalindromo(texto) {
    const t = texto.toUpperCase().replace(/\s+/g, "");
    const invertida = t.split("").reverse().join("");
    return t === invertida;
}

function tipoTriangulo(a, b, c) {
    if (a + b <= c || a + c <= b || b + c <= a) {
        return "Não forma um triângulo";
    }

    if (a === b && b === c) {
        return "Triângulo Equilátero";
    } else if (a === b || a === c || b === c) {
        return "Triângulo Isósceles";
    } else {
        return "Triângulo Escaleno";
    }
}