let n = +prompt("Nhập mốt số nguyên n");
for (let i = n; i > 0; --i) {
  for (let j = 0; j < i; ++j) {
    document.write("*");
  }
  document.write("</br>");
}
document.write("</br>");
for (let i = 1; i <= n; ++i) {
  for (let j = 1; j <= i; ++j) {
    document.write("*");
  }
  document.write("</br>");
}
document.write("</br>");
for (let i = n; i > 0; --i) {
  for (let j = 1; j <= n; ++j) {
    if (j >= i) {
      document.write("*");
    } else {
      document.write("&nbsp; ");
    }
  }
  document.write("</br>");
}
document.write("</br>");
for (let i = n; i > 0; --i) {
  for (let j = 1; j <= n; ++j) {
    if (j <= i) {
      document.write("*");
    } else {
      document.write("&nbsp; ");
    }
  }
  document.write("</br>");
}
