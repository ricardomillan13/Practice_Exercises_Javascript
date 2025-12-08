// Exercise 2
const exercise2Code = `
function doubleArray(numbers) {
  const doubled = numbers.map(n => n * 2);
  console.log(doubled);
}
doubleArray([1, 2, 4, 5]);
`;

function doubleArray(numbers, uiMode = false) {
  const doubled = numbers.map(n => n * 2);
  if (!uiMode) console.log(doubled);
  return { code: exercise2Code, output: doubled.join(", ") };
}
