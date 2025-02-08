function foo(a) {
  if (typeof a !== 'number') {
    throw new Error('Input must be a number');
  }
  return a + 10;
}

function bar(a) {
  if (typeof a !== 'number') {
    throw new Error('Input must be a number');
  }
  return a * 10;
}

console.log(foo(bar(5))); // Output: 60