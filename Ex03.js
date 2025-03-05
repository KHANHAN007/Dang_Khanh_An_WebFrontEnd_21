let password = "0301anlinh", i = 1;
let input;
while (i <= 3) {
    input = prompt(`Nhập mật khẩu lần thứ ${i}`);
    if (password === input) {
        alert("accept");
        break;
    }
    ++i;
}
if (i === 4) {
    alert("Nhập sai 3 lần. Khoá");
}