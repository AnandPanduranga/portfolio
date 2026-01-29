// =======================================
// ✅ 1. Filter even numbers
// =======================================
function filterProgram1() {
  let numbers = [10, 15, 20, 25, 30];

  let evenNumbers = numbers.filter((value) => value % 2 === 0);

  console.log("1. Even Numbers:", evenNumbers);
}
filterProgram1();


// =======================================
// ✅ 2. Filter odd numbers
// =======================================
function filterProgram2() {
  let numbers = [11, 22, 33, 44, 55];

  let oddNumbers = numbers.filter((value) => value % 2 !== 0);

  console.log("2. Odd Numbers:", oddNumbers);
}
filterProgram2();


// =======================================
// ✅ 3. Filter numbers greater than 25
// =======================================
function filterProgram3() {
  let numbers = [10, 20, 30, 40, 50];

  let greater = numbers.filter((value) => value > 25);

  console.log("3. Numbers > 25:", greater);
}
filterProgram3();


// =======================================
// ✅ 4. Filter names with length > 4
// =======================================
function filterProgram4() {
  let names = ["nithin", "anil", "sita", "rahul", "kiran"];

  let longNames = names.filter((name) => name.length > 4);

  console.log("4. Names length > 4:", longNames);
}
filterProgram4();


// =======================================
// ✅ 5. Filter students who passed (marks >= 50)
// =======================================
function filterProgram5() {
  let students = [
    { name: "Nithin", marks: 80 },
    { name: "Rahul", marks: 45 },
    { name: "Sita", marks: 60 }
  ];

  let passed = students.filter((student) => student.marks >= 50);

  console.log("5. Passed Students:", passed);
}
filterProgram5();


// =======================================
// ✅ 6. Filter prices less than 500
// =======================================
function filterProgram6() {
  let prices = [200, 800, 450, 1000, 300];

  let affordable = prices.filter((price) => price < 500);

  console.log("6. Prices < 500:", affordable);
}
filterProgram6();


// =======================================
// ✅ 7. Filter words starting with "a"
// =======================================
function filterProgram7() {
  let words = ["apple", "banana", "avocado", "mango", "apricot"];

  let startWithA = words.filter((word) => word.startsWith("a"));

  console.log("7. Words starting with 'a':", startWithA);
}
filterProgram7();
