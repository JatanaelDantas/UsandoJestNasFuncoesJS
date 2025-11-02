module.exports = ehPrimo;

function ehPrimo(n) {
    if (n <= 1) return false;
    let i = 2;
    while (i <= n / 2) {
        if (n % i === 0) return false;
        i++;
    }
    return true;
}

console.log("17 é primo?", ehPrimo(17));