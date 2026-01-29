// Program 1: Print day name using switch
let day = 4;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

// Program 2: Simple calculator
let a = 10, b = 5;
let operator = "+";
switch (operator) {
    case "+":
        console.log(a + b);
        break;
    case "-":
        console.log(a - b);
        break;
    case "*":
        console.log(a * b);
        break;
    case "/":
        console.log(a / b);
        break;
    default:
        console.log("Invalid operator");
}

// Program 3: Print month name
let month = 6;
switch (month) {
    case 1:
        console.log("January");
        break;
    case 2:
        console.log("February");
        break;
    case 3:
        console.log("March");
        break;
    case 4:
        console.log("April");
        break;
    case 5:
        console.log("May");
        break;
    case 6:
        console.log("June");
        break;
    default:
        console.log("Invalid month");
}

// Program 4: Check vowel or consonant
let ch = 'a';
switch (ch) {
    case 'a':
    case 'e':
    case 'i':
    case 'o':
    case 'u':
        console.log("Vowel");
        break;
    default:
        console.log("Consonant");
}

// Program 5: Traffic signal
let signal = "green";
switch (signal) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Ready");
        break;
    case "green":
        console.log("Go");
        break;
    default:
        console.log("Invalid signal");
}

// Program 6: Check grade
let grade = 'B';
switch (grade) {
    case 'A':
        console.log("Excellent");
        break;
    case 'B':
        console.log("Very Good");
        break;
    case 'C':
        console.log("Good");
        break;
    case 'D':
        console.log("Average");
        break;
    default:
        console.log("Fail");
}

// Program 7: Menu-based program
let choice = 2;
switch (choice) {
    case 1:
        console.log("You selected Coffee");
        break;
    case 2:
        console.log("You selected Tea");
        break;
    case 3:
        console.log("You selected Juice");
        break;
    default:
        console.log("Invalid choice");
}
