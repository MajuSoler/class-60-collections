const patients = require("./patients");

// console.log(patients[0].firstName + patients[0].lastName);
// console.log(patients[1].firstName + patients[1].lastName);
// console.log(patients[2].firstName + patients[2].lastName);
// console.log(patients[3].firstName + patients[3].lastName);
// console.log(patients[4].firstName + patients[4].lastName);
// console.log(patients[5].firstName + patients[5].lastName);

for (let index = 0; index < patients.length; index++) {
  //   console.log("What is index?", index);
  console.log(
    ` This is patient ${patients[index].lastName}, he is a good patient. `
  );
}
