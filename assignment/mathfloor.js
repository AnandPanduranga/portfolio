function floorValues() {
  let i = 1;

  do {
    let num = Math.random() * 10;
    console.log("Floor Value:", Math.floor(num));
    i++;
  } while (i <= 5);
}

floorValues();
