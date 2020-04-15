let space = "";
for (let i = 0; i < 8; i++) {
    for (let j = 0; j < 4; j++) {
        if (i % 2 == 0) {
            space += "  ";
            space += "# ";
        } else {
            space += "# ";
            space += "  ";
        }
    }
    space += '\n';
}
console.log(space);