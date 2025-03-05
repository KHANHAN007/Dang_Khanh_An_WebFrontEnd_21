let num;
let sum = 0,
  i = 0;
while (i < 5) {
  num = +prompt("Nhập số nguyên");
  if (num % 2 !== 0) {
    sum += num;
  }
  ++i;
}
alert(sum);
