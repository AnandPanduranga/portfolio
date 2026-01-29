// ✅ Method 1: Array Literal
let arr1 = [10, 20, 30, 40];
console.log("Array Literal:", arr1);


// ✅ Method 2: Using new Array()
let arr2 = new Array(5, 15, 25, 35);
console.log("new Array():", arr2);


// ✅ Method 3: Empty Array then Push
let arr3 = [];
arr3.push(100);
arr3.push(200);
arr3.push(300);
console.log("Push Method:", arr3);


// ✅ Method 4: Using Array.of()
let arr4 = Array.of(1, 2, 3, 4);
console.log("Array.of():", arr4);


// ✅ Method 5: Using Array.from()
let arr5 = Array.from("NITHIN");
console.log("Array.from():", arr5);


// ✅ Method 6: Using Split()
let arr6 = "apple,banana,orange".split(",");
console.log("Split Method:", arr6);

let numbers = [10, 20, 30, 40, 50];

function forLoopArray() {
  let numbers = [10, 20, 30, 40, 50];

  console.log("---- for Loop ----");

  for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
  }
}

forLoopArray();

function whileLoopArray() {
  let numbers = [10, 20, 30, 40, 50];

  console.log("---- while Loop ----");

  let i = 0;
  while (i < numbers.length) {
    console.log(numbers[i]);
    i++;
  }
}

whileLoopArray();

function doWhileLoopArray() {
  let numbers = [10, 20, 30, 40, 50];

  console.log("---- do...while Loop ----");

  let i = 0;
  do {
    console.log(numbers[i]);
    i++;
  } while (i < numbers.length);
}

doWhileLoopArray();

function forOfLoopArray() {
  let numbers = [10, 20, 30, 40, 50];

  console.log("---- for...of Loop ----");

  for (let value of numbers) {
    console.log(value);
  }
}

forOfLoopArray();

function forInLoopArray() {
  let numbers = [10, 20, 30, 40, 50];

  console.log("---- for...in Loop ----");

  for (let index in numbers) {
    console.log("Index:", index, "Value:", numbers[index]);
  }
}

forInLoopArray();

function forEachLoopArray() {
  let numbers = [10, 20, 30, 40, 50];

  console.log("---- forEach Loop ----");

  numbers.forEach(function (value) {
    console.log(value);
  });
}

forEachLoopArray();

function mapLoopArray() {
  let numbers = [10, 20, 30, 40, 50];

  console.log("---- map Loop ----");

  numbers.map((value) => {
    console.log(value);
  });
}

mapLoopArray();

