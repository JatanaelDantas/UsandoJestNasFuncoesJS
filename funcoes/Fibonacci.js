function fibonacci(quantidade_numeros) {


  if (quantidade_numeros <= 0) {
    return [];
  }
  if (quantidade_numeros === 1) {
    return [0];
  }
  
  let n1 = 0;
  let n2 = 1;
  let numeros = [n1, n2]; 


  for (let i = 2; i < quantidade_numeros; i++) {
    let sucessor = n1 + n2;
    n1 = n2;
    n2 = sucessor;
    numeros.push(sucessor);
  }


  return numeros; 
}


module.exports = fibonacci;