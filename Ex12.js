function getRandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

for (let i = 0; i < 10; i++) {
  console.log(
    `%c Màu sắc thay đổi`,
    `color: ${getRandomColor()}`
  );
}
