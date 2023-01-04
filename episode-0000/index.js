function fizzbuzz(n) {
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    if (i % 3 === 0 && i % 5 === 0) {
      results.push('FizzBuzz');
    } else if (i % 3 === 0) {
      results.push('Fizz');
    } else if (i % 5 === 0) {
      results.push('Buzz');
    } else {
      results.push(i);
    }
  }
  
  return results;
}

function fizzbuzz(n) {
  const results = [];

  for (let i = 1; i <= n; i += 1) {
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }
    
    if (i % 5 === 0) {
      result += 'Buzz';
    }

    if (result) {
      results.push(result);
    } else {
      results.push(i);
    }
  }
  
  return results;
}

function fizzbuzz(n) {
  return Array.from({ length: n }, (_, i) => {
    i += 1;
    let result = '';

    if (i % 3 === 0) {
      result += 'Fizz';
    }
    
    if (i % 5 === 0) {
      result += 'Buzz';
    }

    return result || i;
  });
}

console.log(fizzbuzz(3)) // [1, 2, "Fizz"]
console.log(fizzbuzz(5))

console.log(fizzbuzz(16))