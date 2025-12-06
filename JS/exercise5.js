// Exercise 5
const exercise5Code = `
let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

// Remove Dani
people.splice(people.indexOf("Dani"), 1);

// Remove Juan
people.splice(people.indexOf("Juan"), 1);

// Move Luis to front
const luis = people.splice(people.indexOf("Luis"), 1)[0];
people.unshift(luis);

// Add your name
people.push("Ricardo");

console.log("Final array:", people);
`;

function runPeopleExercise(uiMode = false) {
  let people = ["Maria", "Dani", "Luis", "Juan", "Camila"];

  // Remove Dani
  people.splice(people.indexOf("Dani"), 1);

  // Remove Juan
  people.splice(people.indexOf("Juan"), 1);

  // Move Luis to front
  const luis = people.splice(people.indexOf("Luis"), 1)[0];
  people.unshift(luis);

  // Add your name
  people.push("Ricardo");

  const result = people.join(", ");
  if (!uiMode) console.log(result);

  return { code: exercise5Code, output: result };
}
