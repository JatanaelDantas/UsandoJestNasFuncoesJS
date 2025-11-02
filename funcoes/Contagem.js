module.exports = contar;

function contar(inicio, N) {
    let contador = 0;
    let i = inicio;
    while (i <= N) {
        contador++;
        i++;
    }
    return contador;
}

console.log("Quantidade no intervalo:", contar(2, 10));