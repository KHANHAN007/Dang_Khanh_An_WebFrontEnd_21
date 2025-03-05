let i = 1;
while (i <= 100) {
    switch ((i % 5 === 0) ? (i % 3 === 0 ? 1 : 0) : (i % 3 === 0 ? -1 : 2)) {
        case -1:
            document.write("Fizz ");
            break;
        case 0:
            document.write("Buzz ");
            break;
        case 1:
            document.write("FizzBuzz");
            break;
        default:
            document.write(`${i} `);
    }
    i++;
}