let initialMoney = +prompt("Nhập số tiền gửi ban đầu");
let taxRax = +prompt("Nhập lãi suất");
let month = +prompt("Nhập số tháng gửi");
let tmp = initialMoney;
while (month>0) {
    tmp += tmp * taxRax;
    month--;
}

alert(`Tiền lãi ${(tmp - initialMoney).toFixed(3)} \nTiền nhận được ${tmp.toFixed(3)}`);