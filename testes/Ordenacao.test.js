const ordenar = require('../funcoes/Ordenacao.js');

test('Deve ordenar um array simples', () => {
  const array = [5, 1, 4, 2, 8];
  const esperado = [1, 2, 4, 5, 8];
  
  expect(ordenar(array)).toEqual(esperado);
});

test('Deve lidar com um array já ordenado', () => {
  const array = [1, 2, 3, 4, 5];
  const esperado = [1, 2, 3, 4, 5];
  expect(ordenar(array)).toEqual(esperado);
});

