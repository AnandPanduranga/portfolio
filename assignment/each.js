// =======================================
// ✅ 1. Print all numbers
// =======================================
function forEachProgram1() {
  let numbers = [10, 20, 30, 40];

  console.log("1. Print Numbers:");
  numbers.forEach((value) => {
    console.log(value);
  });
}
forEachProgram1();


// =======================================
// ✅ 2. Print index and value
// =======================================
function forEachProgram2() {
  let numbers = [5, 15, 25, 35];

  console.log("2. Index + Value:");
  numbers.forEach((value, index) => {
    console.log("Index:", index, "Value:", value);
  });
}
forEachProgram2();


// =======================================
// ✅ 3. Sum of all elements
// =======================================
function forEachProgram3() {
  let numbers = [10, 20, 30];
  let sum = 0;

  numbers.forEach((value) => {
    sum += value;
  });

  console.log("3. Sum of Array:", sum);
}
forEachProgram3();


// =======================================
// ✅ 4. Print all names in uppercase
// =======================================
function forEachProgram4() {
  let names = ["nithin", "rahul", "sita"];

  console.log("4. Names in Uppercase:");
  names.forEach((name) => {
    console.log(name.toUpperCase());
  });
}
forEachProgram4();


// =======================================
// ✅ 5. Multiply each element by 3 (display only)
// =======================================
function forEachProgram5() {
  let numbers = [2, 4, 6];

  console.log("5. Multiply by 3:");
  numbers.forEach((value) => {
    console.log(value * 3);
  });
}
forEachProgram5();


// =======================================
// ✅ 6. Display object details
// =======================================
function forEachProgram6() {
  let students = [
    { name: "Nithin", marks: 90 },
    { name: "Rahul", marks: 85 },
    { name: "Sita", marks: 95 }
  ];

  console.log("6. Student Details:");
  students.forEach((student) => {
    console.log(student.name, "scored", student.marks);
  });
}
forEachProgram6();


// =======================================
// ✅ 7. Count even numbers in array
// =======================================
function forEachProgram7() {
  let numbers = [10, 15, 20, 25, 30];
  let count = 0;

  numbers.forEach((value) => {
    if (value % 2 === 0) {
      count++;
    }
  });

  console.log("7. Total Even Numbers:", count);
}
forEachProgram7();
