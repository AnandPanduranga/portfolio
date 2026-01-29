function ceilValues() {
  let i = 1;

  do {
    let num = Math.random() * 10;
    console.log("Ceil Value:", Math.ceil(num));
    i++;
  } while (i <= 5);
}

ceilValues();
