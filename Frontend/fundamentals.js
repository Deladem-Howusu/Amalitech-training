// Practise exercises for Day 4 - Fundamentals

// Average of 10 scores
const scores = [85, 90, 78, 92, 88, 76, 95, 89, 84, 91];
let sum = 0;
for (let i = 0; i < scores.length; i++) {
  sum += scores[i];
}
const average = sum / scores.length;

// Pass or Fail based on score
function checkPassFail(score) {
  if (score >= 60) {
    return "Pass";
  } else {
    return "Fail";
  }
}

// Creating readable sentence from object
const person = {
  name: "John",
  department: "Engineering",
  role: "Software Developer",
  status: "Active",
};

let sentence = `${person.name} works in the ${person.department} department as a ${person.role}. Their current status is ${person.status}.`;

//Names and it position in an array
const names = ["Alice", "Bob", "Charlie", "David", "Eve"];
for (let i = 0; i < names.length; i++) {
  console.log(`${names[i]} is at position ${i} in the array.`);
}

//Even or Odd number check
function checkEvenOdd(number) {
  if (number % 2 === 0) {
    return "Even";
  } else {
    return "Odd";
  }
}

// Create a small JavaScript program with at least five employees. Each employee should have a name and score.
// Use arrays, objects, loops, conditions and functions to display each employee's name, score and performance
// result. Suggested result ranges: 80-100 = Excellent, 60-79 = Good, 50-59 = Average, below 50 = Needs
// Improvement
const employees = [
  { name: "Alice", score: 85 },
  { name: "Bob", score: 72 },
  { name: "Charlie", score: 65 },
  { name: "David", score: 45 },
  { name: "Eve", score: 92 },
];

function getPerformance(score) {
  if (score >= 80) {
    return "Excellent";
  } else if (score >= 60) {
    return "Good";
  } else if (score >= 50) {
    return "Average";
  } else {
    return "Needs Improvement";
  }
}

for (let i = 0; i < employees.length; i++) {
  const employee = employees[i];
  console.log(
    `${employee.name} scored ${employee.score} and has performance: ${getPerformance(employee.score)}`,
  );
}
