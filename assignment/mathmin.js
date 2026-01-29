function minRandom() {
  let i = 1;
  let minNum = 100;

  do {
    let num = Math.floor(Math.random() * 100);
    console.log("Generated:", num);

    minNum = Math.min(minNum, num);
    i++;
  } while (i <= 5);

  console.log("Minimum Number:", minNum);
}

minRandom();
