// Program 1: Skip number 5 while printing 1 to 10
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        continue;
    }
    console.log(i);
}

// Program 2: Print only odd numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        continue;
    }
    console.log(i);
}

// Program 3: Print only even numbers from 1 to 20
for (let i = 1; i <= 20; i++) {
    if (i % 2 !== 0) {
        continue;
    }
    console.log(i);
}

// Program 4: Skip multiples of 3 from 1 to 15
for (let i = 1; i <= 15; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// Program 5: Skip negative numbers in an array
let arr = [5, -2, 10, -8, 7];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] < 0) {
        continue;
    }
    console.log(arr[i]);
}

// Program 6: Skip a specific character
let str = "javascript";
for (let i = 0; i < str.length; i++) {
    if (str[i] === 'a') {
        continue;
    }
    console.log(str[i]);
}

// Program 7: Skip number divisible by 5 from 1 to 25
for (let i = 1; i <= 25; i++) {
    if (i % 5 === 0) {
        continue;
    }
    console.log(i);
}
