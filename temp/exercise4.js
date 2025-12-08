// Exercise 4
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

const exercise4Code = `
let student1Courses = ["Math", "English", "Programming"];
let student2Courses = ["Geography", "Spanish", "Programming"];

const common = student1Courses.filter(course =>
  student2Courses.includes(course)
);
console.log("Common courses:", common);
`;

function findCommonCourses(uiMode = false) {
  const common = student1Courses.filter(c => student2Courses.includes(c));
  const result = "Common courses: " + common.join(", ");
  if (!uiMode) console.log(result);
  return { code: exercise4Code, output: result };
}
