// =======================================
// ✅ 1. Multiply each number by 2
// =======================================
function mapProgram1() {
  let numbers = [10, 20, 30, 40];

  let result = numbers.map((value) => value * 2);

  console.log("1. Multiply by 2:", result);
}
mapProgram1();


// =======================================
// ✅ 2. Convert names to Uppercase
// =======================================
function mapProgram2() {
  let names = ["nithin", "rahul", "sita"];

  let result = names.map((name) => name.toUpperCase());

  console.log("2. Uppercase Names:", result);
}
mapProgram2();


// =======================================
// ✅ 3. Add 5 to each element
// =======================================
function mapProgram3() {
  let numbers = [5, 15, 25, 35];

  let result = numbers.map((value) => value + 5);

  console.log("3. Add 5:", result);
}
mapProgram3();


// =======================================
// ✅ 4. Find square of each number
// =======================================
function mapProgram4() {
  let numbers = [2, 4, 6, 8];

  let result = numbers.map((value) => value * value);

  console.log("4. Squares:", result);
}
mapProgram4();


// =======================================
// ✅ 5. Convert prices into GST included prices (18%)
// =======================================
function mapProgram5() {
  let prices = [100, 200, 300];

  let result = prices.map((price) => price + price * 0.18);

  console.log("5. GST Included Prices:", result);
}
mapProgram5();


// =======================================
// ✅ 6. Extract only ages from object array
// =======================================
function mapProgram6() {
  let people = [
    { name: "Nithin", age: 21 },
    { name: "Rahul", age: 22 },
    { name: "Sita", age: 20 }
  ];

  let result = people.map((person) => person.age);

  console.log("6. Ages Array:", result);
}
mapProgram6();


// =======================================
// ✅ 7. Convert string numbers into integers
// =======================================
function mapProgram7() {
  let strNumbers = ["10", "20", "30", "40"];

  let result = strNumbers.map((value) => parseInt(value));

  console.log("7. Converted to Integers:", result);
}
mapProgram7();
