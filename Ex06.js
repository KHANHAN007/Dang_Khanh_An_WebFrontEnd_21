let num = +prompt("Nhập một số nguyên");
for (let i = 1; i <= num; ++i){
    if (num % i === 0) {
        document.write(`${i} `);
    }
}