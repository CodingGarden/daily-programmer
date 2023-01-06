function findMin(numbers) {
  let minimum = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  
  return minimum;
}

function findMin(numbers) {
  let minimum = Infinity;

  for (let i = 0; i < numbers.length; i += 1) {
    if (numbers[i] < minimum) {
      minimum = numbers[i];
    }
  }
  
  return minimum;
}

function findMin(numbers) {
  return Math.min(...numbers);
}

function findMin(numbers) {
  return Math.min.apply(null, numbers);
}

function findMin(numbers) {
  let minimum = numbers[0];

  for (let i = 1; i < numbers.length; i += 1) {
    minimum = Math.min(minimum, numbers[i]);
  }
  
  return minimum;
}

function findMin(numbers) {
  return numbers.sort((a, b) => a - b)[0];
}

function findMin(numbers) {
  return numbers.sort((a, b) => b - a).at(-1);
}

function findMin(numbers) {
  return numbers.reduce((minimum, value) => {
    if (value < minimum) {
      return value;
    }
    return minimum;
  });
}

function findMin(numbers) {
  return numbers.reduce((minimum, value) => {
    return Math.min(minimum, value);
  });
}

console.log(findMin([1, 2, 3])); // 1
console.log(findMin([-10, 42, 18, 37, 99, -100])); // -100
console.log(findMin([-1, -2, -3])); // -3