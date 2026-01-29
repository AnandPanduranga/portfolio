function randomNumbers() {
  let count = 1;

  do {
    console.log("Random:", Math.random());
    count++;
  } while (count <= 5);
}

randomNumbers();
