// Program 1: Print numbers from 1 to 10
let i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// Program 2: Print even numbers from 1 to 20
let num = 1;
do {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
} while (num <= 20);

// Program 3: Print odd numbers from 1 to 15
let n = 1;
do {
    if (n % 2 !== 0) {
        console.log(n);
    }
    n++;
} while (n <= 15);

// Program 4: Print multiplication table of 7
let table = 7;
let j = 1;
do {
    console.log(table + " x " + j + " = " + (table * j));
    j++;
} while (j <= 10);

// Program 5: Find sum of first 10 natural numbers
let sum = 0;
let k = 1;
do {
    sum += k;
    k++;
} while (k <= 10);
console.log("Sum =", sum);

// Program 6: Find factorial of a number
let factNum = 5;
let fact = 1;
let m = 1;
do {
    fact *= m;
    m++;
} while (m <= factNum);
console.log("Factorial =", fact);

// Program 7: Do-while executes at least once
let x = 15;
do {
    console.log("This will print once even if condition is false");
} while (x < 10);
