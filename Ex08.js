for (let i = 1; i < 1000; ++i) {
  let sum = 0;
  let temp = i;
  while (temp > 0) {
    let digit = temp % 10;
    sum += digit * digit * digit;
    temp = Math.floor(temp / 10);
  }
  if (sum === i) {
    document.write(`${i} `);
  }
}
