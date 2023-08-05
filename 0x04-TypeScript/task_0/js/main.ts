interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}
const student1: Student = {
  firstName: "Annabel",
  lastName: "Wilson",
  age: 20,
  location: "Abuja",
};
const student2: Student = {
  firstName: "Jasmine",
  lastName: "Adedeji",
  age: 25,
  location: "Lagos",
};
const array = [student1, student2];
const table = document.createElement("table");
const tableBody = document.createElement("tableBody");

for (let student of array) {
  const tableRow = document.createElement("tableRow");
  const firstNameTd = document.createElement("td");
  const locationTd = document.createElement("td");

  firstNameTd.textContent = student.firstName;
  locationTd.textContent = student.location;

  tableRow.appendChild(firstNameTd);
  tableRow.appendChild(locationTd);
  tableBody.appendChild(tableRow);
}

table.appendChild(tableBody);
document.body.appendChild(table);
