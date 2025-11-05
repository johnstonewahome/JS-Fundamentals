const n = parseInt(process.argv[2], 10);

function factorial(x) {
    if (x <= 1) return 1;
    return x * factorial(x - 1);
}

const input = Number.isNaN(n) ? 1 : n;
console.log(factorial(input));