function sortStudentsByScore(students) {
  for (let i = 0; i < students.length; i++) {
    for (let j = 0; j < students.length - 1 - i; j++) {
      if (students[j].score < students[j + 1].score) {
        let temp = students[j];
        students[j] = students[j + 1];
        students[j + 1] = temp;
      }
    }
  }
  return students;
}

let studentScores = [
  { id: "S001", name: "Anan", score: 85 },
  { id: "S002", name: "Boon", score: 92 },
  { id: "S003", name: "Chai", score: 78 },
  { id: "S004", name: "Dao", score: 95 },
  { id: "S005", name: "Ek", score: 88 },
  { id: "S006", name: "Fah", score: 80 },
];

console.log(sortStudentsByScore(studentScores));

// Time Complexity = O(n^2)
// เนื่องจากมีการใช้ Bubble Sort ซึ่งเป็นการ Sort โดยใช้ nested loop จึงได้ออกมาเป็น O(n^2)
