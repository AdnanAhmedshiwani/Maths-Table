
function printMultiplicationTables(start, end) {
    let actualEnd = Math.min(end, 20);

    for (let i = start; i <= actualEnd; i++) {
        document.write(`Table of ${i}: <br>`);
        for (let j = 1; j <= 10; j++) {
            const result = i * j;
            document.write(`${i} x ${j} = ${result} <br>`);
        }
        document.write("<br>");
    }

    if (end > 20) {
        alert("Invalid input. Range must be between 2 and 20.");
    }
}

function startProgram() {
    const startRange = parseInt(prompt("Enter the start range (2 to 20):"));
    const endRange = parseInt(prompt("Enter the end range (2 to 20):"));

    if (isNaN(startRange) || isNaN(endRange) || startRange < 2 || endRange > 20 || startRange > endRange) {
        alert("Invalid input. Range must be between 2 and 20.");
    } else {
        printMultiplicationTables(startRange, endRange);
    }
}

startProgram();
