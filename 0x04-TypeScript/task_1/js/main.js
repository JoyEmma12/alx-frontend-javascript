var teacher3 = {
    firstName: "John",
    lastName: "Doe",
    fullTimeEmployee: false,
    location: "London",
    yearsOfExperience: 2,
};
console.log(teacher3);
var director1 = {
    firstName: "John",
    lastName: "Doe",
    location: "London",
    fullTimeEmployee: true,
    numberOfReports: 17,
};
console.log(director1);
function printTeacher(firstName, lastName) {
    return "".concat(firstName[0], ". ").concat(lastName);
}
console.log(printTeacher("Joy", "Emmanuel"));
var studentClass = /** @class */ (function () {
    function studentClass(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }
    studentClass.prototype.workOnHomework = function () {
        return "Currently working";
    };
    studentClass.prototype.displayName = function () {
        return this.firstName;
    };
    return studentClass;
}());
var studentclass = {
    firstName: "Janet",
    lastName: "Willams",
};
console.log(studentclass.displayName());
console.log(studentclass.workOnHomework());
