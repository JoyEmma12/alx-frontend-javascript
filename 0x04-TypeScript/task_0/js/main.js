var student1 = {
    firstName: "Annabel",
    lastName: "Wilson",
    age: 20,
    location: "Abuja",
};
var student2 = {
    firstName: "Jasmine",
    lastName: "Adedeji",
    age: 25,
    location: "Lagos",
};
var array = [student1, student2];
var table = document.createElement("table");
var tableBody = document.createElement("tableBody");
for (var _i = 0, array_1 = array; _i < array_1.length; _i++) {
    var student = array_1[_i];
    var tableRow = document.createElement("tableRow");
    var firstNameTd = document.createElement("td");
    var locationTd = document.createElement("td");
    firstNameTd.textContent = student.firstName;
    locationTd.textContent = student.location;
    tableRow.appendChild(firstNameTd);
    tableRow.appendChild(locationTd);
    tableBody.appendChild(tableRow);
}
table.appendChild(tableBody);
document.body.appendChild(table);
