const somar = require('../funcoes/Somatorio.js');

test('Deve calcular o somatório de 1 até 5', () => {
 
  expect(somar(5)).toBe(15);
});

test('Deve calcular o somatório de 1 até 1', () => {
  expect(somar(1)).toBe(1);
});

