// Getting information from the form and displaying it in the table
const form = document.querySelector("form");

// Get the inputs
const firstName = document.querySelector("#firstName");
const lastName = document.querySelector("#lastName");
const email = document.querySelector("#email");
const phone = document.querySelector("#phone");
const dob = document.querySelector("#dob");

const specialization = document.querySelector("#Specialization");
const bio = document.querySelector("#bio");

// Get the employee table body
const employeeTable = document.querySelector("#employees tbody");

// Listen for form submission
form.addEventListener("submit", function (event) {
  // Prevent page refresh
  event.preventDefault();

  // Get values
  const first = firstName.value.trim();

  const last = lastName.value.trim();
  const emailValue = email.value.trim();
  const phoneValue = phone.value.trim();
  const dobValue = dob.value;
  const specializationValue = specialization.value;
  const bioValue = bio.value.trim();

  console.log(
    `First Name: ${first} Last Name: ${last} Email: ${emailValue} Phone: ${phoneValue} DOB: ${dobValue} Specialization: ${specializationValue} Bio: ${bioValue}`,
  );

  // Get selected employment type
  const employmentType = document.querySelector(
    'input[name="employmentType"]:checked',
  ).value;

  // Get selected skills
  const selectedSkills = document.querySelectorAll(
    'input[name="skills"]:checked',
  );

  const skills = [];

  selectedSkills.forEach(function (skill) {
    skills.push(skill.value);
  });

  // validation
  if (
    first === "" ||
    last === "" ||
    emailValue === "" ||
    specializationValue === ""
  ) {
    alert("Please fill in all required fields.");
    return;
  }

  // Create a new table row
  const row = document.createElement("tr");

  // Create table cells
  const numberCell = document.createElement("td");
  const firstCell = document.createElement("td");
  const lastCell = document.createElement("td");
  const emailCell = document.createElement("td");
  const departmentCell = document.createElement("td");
  const employmentCell = document.createElement("td");

  // Put information into cells
  numberCell.textContent = employeeTable.rows.length + 1;
  firstCell.textContent = first;
  lastCell.textContent = last;
  emailCell.textContent = emailValue;

  departmentCell.textContent =
    specialization.options[specialization.selectedIndex].textContent;

  employmentCell.textContent = employmentType;

  // Add cells to the row
  row.append(
    numberCell,
    firstCell,
    lastCell,
    emailCell,
    departmentCell,
    employmentCell,
  );

  // Add row to table
  employeeTable.append(row);

  // Clear form
  form.reset();

  console.log("Employee registered successfully.");
});
