export default class HolbertonCourse {
  constructor(name, length, students) {
    this.name = name;
    this.length = length;
    this.students = students;
  }

  get name() {
    return this.name;
  }

  set name(name) {
    if (typeof name !== "String") {
      return new Error("name should be string");
    }
    this._name = name;
  }

  get length() {
    return this.length;
  }

  set length(length) {
    if (typeof length !== "number") {
      return new Error("length must be number");
    }
    this._length = length;
  }

  get students() {
    return this.students;
  }
  set students(students) {
    if (typeof students !== Array.isArray(students)) {
      return new Error("Students must be in an array");
    }
    students.forEach((student) => {
      if (typeof student !== "string") {
        throw new Error("Each student must be a string");
      }
    });
    this._students = students;
  }
}

