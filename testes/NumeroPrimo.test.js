const ehPrimo = require('../funcoes/NumeroPrimo.js');

test('Deve verificar se 17 é um número primo', () => {
  expect(ehPrimo(17)).toBe(true);
});

test('Deve verificar se 10 não é um número primo', () => {
  expect(ehPrimo(10)).toBe(false);
});

