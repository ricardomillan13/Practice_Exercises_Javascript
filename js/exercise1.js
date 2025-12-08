// Exercise 1
let arr = ["This", "is", "a", "sentence."];

const exercise1Code = `
let arr = ["This", "is", "a", "sentence."];
function printOutString() {
  console.log(arr.join(" "));
}
printOutString();
`;

function printOutString(uiMode = false) {
  const result = arr.join(" ");
  if (!uiMode) console.log(result);
  return { code: exercise1Code, output: result };
}
