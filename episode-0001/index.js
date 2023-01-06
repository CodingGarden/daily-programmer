function reverseString(input) {
  let output = '';
  for (let i = input.length - 1; i >= 0; i -= 1) {
    // output += input[i];
    output = output + input[i];
  }
  return output;
}

function reverseString(input) {
  let output = '';
  for (let i = 0; i < input.length; i += 1) {
    output = input[i] + output;
  }
  return output;
}

function reverseString(input) {
  return input.split('').reverse().join('');
}

function reverseString(input) {
  return [...input].reverse().join('');
}

// Thanks to CodeBrainz
function reverseString(input) {
  const arrayInput = Array.from(input);
  let left = 0;
  let right = arrayInput.length - 1;

  while (left < right) {
    const temp = arrayInput[left];
    arrayInput[left] = arrayInput[right];
    arrayInput[right] = temp;
    left += 1;
    right -= 1;
  }

  return arrayInput.join('');
}

console.log(reverseString('hello')); // 'olleh'
console.log(reverseString('world')); // 'dlrow'
