const students = ["Олександр", "Ігор", "Олена", "Іра", "Олексій", "Світлана"];

const themes = [
  "Диференційне рівняння",
  "Теорія автоматів",
  "Алгоритми і структури даних",
];

const marks = [4, 5, 5, 3, 4, 5];

const pairs = () => [
  [students[0], students[2]],
  [students[1], students[3]],
  [students[4], students[5]],
];
console.log(pairs());

const magisters = () => {
  const paresAndThemes = [];
  for (let i = 0; i < pairs().length; i++) {
    const temporaryPair = [`${pairs()[i].join(" i ")}`, themes[i]];
    paresAndThemes.push(temporaryPair);
  }
  return paresAndThemes;
};
console.log(magisters());

const notes = () => {
  const studentAndNote = [];
  for (let i = 0; i < students.length; i++) {
    const studentNote = [students[i], marks[i]];
    studentAndNote.push(studentNote);
  }
  return studentAndNote;
};
console.log(notes());

const getMagistersNotes = () => {
  const paresNotes = [];
  for (let i = 0; i < magisters().length; i++) {
    const addParesNotes = [
      ...magisters()[i],
      Math.floor(Math.random() * 5) + 1,
    ];
    paresNotes.push(addParesNotes);
  }
  return paresNotes;
};
console.log(getMagistersNotes());




