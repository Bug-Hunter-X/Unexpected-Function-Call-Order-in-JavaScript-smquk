function foo(a) {
  return a + 10;
}

function bar(a) {
  return a * 10;
}

console.log(foo(bar(5))); //expect 60, actually 15