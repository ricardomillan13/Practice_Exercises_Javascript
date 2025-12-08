// Exercise 3
const exercise3Code = `
function sumAndProduct(numbers) {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const product = numbers.reduce((acc, n) => acc * n, 1);
  console.log("Sum:", sum);
  console.log("Product:", product);
}
sumAndProduct([1, 2, 3, 4]);
`;

function sumAndProduct(numbers, uiMode = false) {
  const sum = numbers.reduce((acc, n) => acc + n, 0);
  const product = numbers.reduce((acc, n) => acc * n, 1);
  const result = `Sum: ${sum}\nProduct: ${product}`;
  if (!uiMode) console.log(result);
  return { code: exercise3Code, output: result };
}
