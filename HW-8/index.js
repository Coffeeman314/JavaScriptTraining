class Student {
  constructor(options) {
    this.university = options.university;
    this.course = options.course;
    this.fullName = options.fullName;
    this.marks = [5, 4, 4, 5];
    this.dismiss = false;
  }

  getInfo(student) {
    return (
      `${this.fullName}` +
      ", student of " +
      `${this.course}` +
      ". course " +
      `${this.university}` +
      "."
    );
  }

  dismissMe() {
    return (this.dismiss = true);
  }
  recover() {
    return (this.dismiss = false);
  }
  getAverageMark() {
    return !this.dismiss
      ? (
          this.marks.reduce((acc, el) => acc + el, 0) / this.marks.length
        ).toFixed(2)
      : null;
  }

  get notes() {
    return this.marks;
  }

  set notes(num) {
    this.marks.push(num);
  }
}

const student = new Student({
  university: "University of Missouri, Kansas City",
  course: 2,
  fullName: "Ostap Bender",
});
console.log(student.getInfo(student));

console.log(student.notes);
student.notes = 5;

console.log(student.dismiss);
console.log(student.getAverageMark());
student.dismissMe();

console.log(student.dismiss);
console.log(student.getAverageMark());
