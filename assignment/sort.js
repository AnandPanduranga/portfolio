// =======================================
// ✅ 1. Sort numbers in Ascending Order
// =======================================
function sortProgram1() {
  let numbers = [40, 10, 30, 20];

  numbers.sort((a, b) => a - b);

  console.log("1. Ascending Order:", numbers);
}
sortProgram1();


// =======================================
// ✅ 2. Sort numbers in Descending Order
// =======================================
function sortProgram2() {
  let numbers = [40, 10, 30, 20];

  numbers.sort((a, b) => b - a);

  console.log("2. Descending Order:", numbers);
}
sortProgram2();


// =======================================
// ✅ 3. Sort strings Alphabetically (A → Z)
// =======================================
function sortProgram3() {
  let names = ["nithin", "rahul", "anil", "sita"];

  names.sort();

  console.log("3. Alphabetical Order:", names);
}
sortProgram3();


// =======================================
// ✅ 4. Sort strings Reverse Alphabetically (Z → A)
// =======================================
function sortProgram4() {
  let names = ["nithin", "rahul", "anil", "sita"];

  names.sort().reverse();

  console.log("4. Reverse Alphabetical:", names);
}
sortProgram4();


// =======================================
// ✅ 5. Sort array of objects by Age (Ascending)
// =======================================
function sortProgram5() {
  let people = [
    { name: "Nithin", age: 22 },
    { name: "Rahul", age: 25 },
    { name: "Sita", age: 20 }
  ];

  people.sort((a, b) => a.age - b.age);

  console.log("5. Sort by Age Ascending:", people);
}
sortProgram5();


// =======================================
// ✅ 6. Sort array of objects by Marks (Descending)
// =======================================
function sortProgram6() {
  let students = [
    { name: "Nithin", marks: 80 },
    { name: "Rahul", marks: 95 },
    { name: "Sita", marks: 70 }
  ];

  students.sort((a, b) => b.marks - a.marks);

  console.log("6. Sort by Marks Descending:", students);
}
sortProgram6();


// =======================================
// ✅ 7. Sort words by Length (Shortest → Longest)
// =======================================
function sortProgram7() {
  let words = ["apple", "banana", "kiwi", "mango", "watermelon"];

  words.sort((a, b) => a.length - b.length);

  console.log("7. Sort by Word Length:", words);
}
sortProgram7();
