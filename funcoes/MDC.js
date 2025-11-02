module.exports = mdc;

function mdc(a, b) {
    while (b !== 0) {
        let temp = b;
        b = a % b;
        a = temp;
    }
    return a;
}

console.log("MDC(48, 18):", mdc(48, 18));