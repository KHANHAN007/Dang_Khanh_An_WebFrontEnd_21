let a = +prompt("Nhập chiều dài");
let b = +prompt("Nhập chiều rộng");
for (let i = b; i > 0; --i) {
  for (let j = a; j > 0; --j) {
    if (j === 1 || j === a || i === b || i === 1) {
      document.write("*");
    } else document.write("&nbsp; ");
  }
  document.write("</br>");
}
