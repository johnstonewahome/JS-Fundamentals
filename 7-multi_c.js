const count = parseInt(process.argv[2], 10);

if (Number.isNaN(count)) {
    console.log("Missing number of occurrences");
} else {
    let output = '';
    for (let i = 0; i < count; i++) {
        output += 'C is fun';
        if (i < count - 1) output += '\n';
    }
    console.log(output);
}