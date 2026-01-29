// Program 1: Check grade based on marks
let marks = 78;
if (marks >= 90) {
    console.log("Grade A");
} else if (marks >= 75) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else if (marks >= 35) {
    console.log("Grade D");
} else {
    console.log("Fail");
}

// Program 2: Check largest of three numbers
let a = 10, b = 25, c = 15;
if (a > b && a > c) {
    console.log("A is largest");
} else if (b > a && b > c) {
    console.log("B is largest");
} else {
    console.log("C is largest");
}

// Program 3: Check day based on day number
let day = 3;
if (day === 1) {
    console.log("Monday");
} else if (day === 2) {
    console.log("Tuesday");
} else if (day === 3) {
    console.log("Wednesday");
} else if (day === 4) {
    console.log("Thursday");
} else if (day === 5) {
    console.log("Friday");
} else if (day === 6) {
    console.log("Saturday");
} else {
    console.log("Sunday");
}

// Program 4: Electricity bill calculation
let units = 120;
if (units <= 50) {
    console.log("Bill amount: ₹100");
} else if (units <= 100) {
    console.log("Bill amount: ₹200");
} else if (units <= 200) {
    console.log("Bill amount: ₹300");
} else {
    console.log("Bill amount: ₹500");
}

// Program 5: Check traffic signal
let signal = "yellow";
if (signal === "red") {
    console.log("Stop");
} else if (signal === "yellow") {
    console.log("Ready");
} else if (signal === "green") {
    console.log("Go");
} else {
    console.log("Invalid signal");
}

// Program 6: Check month name
let month = 5;
if (month === 1) {
    console.log("January");
} else if (month === 2) {
    console.log("February");
} else if (month === 3) {
    console.log("March");
} else if (month === 4) {
    console.log("April");
} else if (month === 5) {
    console.log("May");
} else {
    console.log("Invalid month");
}

// Program 7: Check temperature condition
let temp = 30;
if (temp < 10) {
    console.log("Very Cold");
} else if (temp < 20) {
    console.log("Cold");
} else if (temp < 30) {
    console.log("Warm");
} else {
    console.log("Hot");
}
