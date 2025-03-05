let num;
let countEven = 0, i = 1;
while (i <= 5) {
    num = +prompt(`Nhập số nguyên thứ ${i}`);
    if (num % 2 === 0)
        countEven++;
    ++i;
}
alert(`Số số chẵn ${countEven} \nSố số lẽ ${5-countEven}`);