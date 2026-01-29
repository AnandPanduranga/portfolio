// Program 1: Print numbers from 1 to 10
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// Program 2: Print even numbers from 1 to 20
let num = 1;
while (num <= 20) {
    if (num % 2 === 0) {
        console.log(num);
    }
    num++;
}

// Program 3: Print odd numbers from 1 to 15
let n = 1;
while (n <= 15) {
    if (n % 2 !== 0) {
        console.log(n);
    }
    n++;
}

// Program 4: Print multiplication table of 6
let table = 6;
let j = 1;
while (j <= 10) {
    console.log(table + " x " + j + " = " + (table * j));
    j++;
}

// Program 5: Find sum of first 10 natural numbers
let sum = 0;
let k = 1;
while (k <= 10) {
    sum += k;
    k++;
}
console.log("Sum =", sum);

// Program 6: Find factorial of a number
let factNum = 5;
let fact = 1;
let m = 1;
while (m <= factNum) {
    fact *= m;
    m++;
}
console.log("Factorial =", fact);

// Program 7: Print numbers from 10 to 1
let rev = 10;
while (rev >= 1) {
    console.log(rev);
    rev--;
}
