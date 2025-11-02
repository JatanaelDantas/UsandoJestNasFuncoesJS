const contar = require('../funcoes/Contagem.js');

test('Deve contar quantos números existem no intervalo de 2 a 10', () => {

  expect(contar(2, 10)).toBe(9);
});

test('Deve contar quantos números existem no intervalo de 5 a 8', () => {

  expect(contar(5, 8)).toBe(4);
});