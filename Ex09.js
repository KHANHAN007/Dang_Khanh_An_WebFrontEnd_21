let num = +prompt("Nhập một số nguyên");
if (num === 2) alert(`${num} là số nguyên tố`);
else if (num % 2 === 0) alert(`${num} không phải là số nguyên tố`);
else {
  let found = 1;
  for (let i = 3; i * i <= num; i += 2) {
    if (num % i === 0) {
      found = 0;
      alert(`${num} không là số nguyên tố`);
      break;
    }
  }
  if (found) {
    alert(`${num} là số nguyên tố`);
  }
}
