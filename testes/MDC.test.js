const mdc = require('../funcoes/MDC.js');

test('Deve calcular o MDC de 48 e 18', () => {

  expect(mdc(48, 18)).toBe(6);
});

test('Deve calcular o MDC de dois números primos (ex: 7 e 5)', () => {
 
  expect(mdc(7, 5)).toBe(1);
});