function maxRandom() {
  let i = 1;
  let maxNum = 0;

  do {
    let num = Math.floor(Math.random() * 100);
    console.log("Generated:", num);

    maxNum = Math.max(maxNum, num);
    i++;
  } while (i <= 5);

  console.log("Maximum Number:", maxNum);
}

maxRandom();
