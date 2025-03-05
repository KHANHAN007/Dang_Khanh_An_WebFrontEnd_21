let amountToWithdraw = +prompt(
  "Nhập số tiền cần rút (phải chia hết cho 1.000)"
);

if (amountToWithdraw % 1000 !== 0) {
  document.write("Số tiền phải chia hết cho 1.000!<br>");
} else {
  let count500k = Math.floor(amountToWithdraw / 500000);
  amountToWithdraw -= count500k * 500000;
  let count200k = Math.floor(amountToWithdraw / 200000);
  amountToWithdraw -= count200k * 200000;
  let count100k = Math.floor(amountToWithdraw / 100000);
  amountToWithdraw -= count100k * 100000;
  let count50k = Math.floor(amountToWithdraw / 50000);
  amountToWithdraw -= count50k * 50000;
  let count20k = Math.floor(amountToWithdraw / 20000);
  amountToWithdraw -= count20k * 20000;
  let count10k = Math.floor(amountToWithdraw / 10000);
  amountToWithdraw -= count10k * 10000;
  let count5k = Math.floor(amountToWithdraw / 5000);
  amountToWithdraw -= count5k * 5000;
  let count2k = Math.floor(amountToWithdraw / 2000);
  amountToWithdraw -= count2k * 2000;
  let count1k = Math.floor(amountToWithdraw / 1000);
  amountToWithdraw -= count1k * 1000;
  if (count500k > 0) document.write(`500000 - ${count500k} tờ<br>`);
  if (count200k > 0) document.write(`200000 - ${count200k} tờ<br>`);
  if (count100k > 0) document.write(`100000 - ${count100k} tờ<br>`);
  if (count50k > 0) document.write(`50000 - ${count50k} tờ<br>`);
  if (count20k > 0) document.write(`20000 - ${count20k} tờ<br>`);
  if (count10k > 0) document.write(`10000 - ${count10k} tờ<br>`);
  if (count5k > 0) document.write(`5000 - ${count5k} tờ<br>`);
  if (count2k > 0) document.write(`2000 - ${count2k} tờ<br>`);
  if (count1k > 0) document.write(`1000 - ${count1k} tờ<br>`);
}
