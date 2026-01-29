// Program 1: Print numbers from 1 to 10
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// Program 2: Print even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Program 3: Print odd numbers from 1 to 15
for (let i = 1; i <= 15; i++) {
    if (i % 2 !== 0) {
        console.log(i);
    }
}

// Program 4: Print multiplication table of 5
let num = 5;
for (let i = 1; i <= 10; i++) {
    console.log(num + " x " + i + " = " + (num * i));
}

// Program 5: Find sum of first 10 natural numbers
let sum = 0;
for (let i = 1; i <= 10; i++) {
    sum += i;
}
console.log("Sum =", sum);

// Program 6: Find factorial of a number
let n = 5;
let fact = 1;
for (let i = 1; i <= n; i++) {
    fact *= i;
}
console.log("Factorial =", fact);

// Program 7: Print reverse numbers from 10 to 1
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
