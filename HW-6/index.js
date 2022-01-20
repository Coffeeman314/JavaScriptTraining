const students = [
  {
    name: "Tanya",
    course: 3,
    subjects: {
      math: [4, 4, 3, 4],
      algorithms: [3, 3, 3, 4, 4, 4],
      data_science: [5, 5, 3, 4],
    },
  },
  {
    name: "Victor",
    course: 4,
    subjects: {
      physics: [5, 5, 5, 3],
      economics: [2, 3, 3, 3, 3, 5],
      geometry: [5, 5, 2, 3, 5],
    },
  },
  {
    name: "Anton",
    course: 2,
    subjects: {
      statistics: [4, 5, 5, 5, 5, 3, 4, 3, 4, 5],
      english: [5, 3],
      cosmology: [5, 5, 5, 5],
    },
  },
];
/////////////////

// 1
const getSubjects = (person) => {
  const subArr = Object.keys(person.subjects).map(
    (elem) =>
      elem[0].toUpperCase() + elem.slice(1).toLowerCase().replace("_", " ")
  );

  return subArr;
};
//const person = 1;
console.log("Subjects list for Victor:", getSubjects(students[1]));

//2
const getAverageMark = (person) => {
  const mark = Object.values(person.subjects).flat();
  const averArr = mark.reduce((acc, num) => acc + num, 0);
  return (averArr / mark.length).toFixed(2);
};
console.log("Average mark for Tanya:", getAverageMark(students[0]));

//3
const getInfo = (person) => ({
  name: person.name,
  course: person.course,
  mark: getAverageMark(person),
});
console.log("Student info:", getInfo(students[2]));

//4
const getStudentsNames = (students) => students.map((elem) => elem.name).sort();
console.log("Names alphabetically:", getStudentsNames(students));

//5
const getBestStudent = (students) => {
  const rating = students.map((person, index) =>
    getAverageMark(students[index])
  );
  const best = rating.indexOf(`${Math.max(...rating)}`);
  return students[best].name;
};
console.log("Best student:", getBestStudent(students));

// 6
const calculateLetters = (word) => {
  const primary = word.split(" ").join("").toLowerCase().split("");
  const arr = {};
  primary.forEach((elem) => {
    arr[elem] === undefined ? (arr[elem] = 1) : ++arr[elem];
  });
  return arr;
};
console.log('Calculator for letters in phrase "Avengers are the best"', calculateLetters("Avengers are the best"));
