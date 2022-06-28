const students = [
  {
    name: "Giannis",
    age: "33",
  },
  {
    name: "Zofer",
    age: "27",
  },
  {
    name: "Vaibhav",
    age: "28",
  },
  {
    name: "Jonatan",
    age: "27",
  },
];

// Spread operator

const names = ["jhon", "mark", "george"];
console.log("This is the names", names);
const names2 = [...names, "maria", "karla"];
console.log("This is names2", names2);

// const lowerCaseStudents = students.map((student) => {
//   return student.name.toLowerCase();
// });

// console.log(lowerCaseStudents);

// const studentAbove30 = students.find((student) => {
//   return student.age < 30;
//   //   if (student.age < 30) {
//   //     console.log(student);
//   //   }
// });

// console.log(studentAbove30);

// // const under30 = students.filter((student) => {
// //   if (student.age < 30) {
// //     console.log(student);
// //   }
// // });
