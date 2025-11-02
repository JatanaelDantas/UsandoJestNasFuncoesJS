const Fibonacci = require('../funcoes/Fibonacci.js'); // <-- Com dois 'c's

test('Os 10 primeiros números da contagem de fibonacci devem ser os corretos', () => {
  const esperado = [0, 1, 1, 2, 3, 5, 8, 13, 21, 34];

  expect(Fibonacci(10)).toMatchObject(esperado);
});

test('Os 2 primeiros números da contagem de fibonacci devem ser 0 e 1', () => {
  expect(Fibonacci(2)).toMatchObject([0, 1]);
});