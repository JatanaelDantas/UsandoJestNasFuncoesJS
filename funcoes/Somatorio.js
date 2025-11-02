module.exports = somar;

function somar(N) {
    let soma = 0;
    let i = 1;
    while (i <= N) {
        soma += i;
        i++;
    }
    return soma;
}

console.log("Somatório até 5:", somar(5));