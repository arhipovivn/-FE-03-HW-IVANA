let a = 1,
    b = 0;
for (let i = 0; i < 15; i++) {
    let sum = a + b;
    a = b;
    b = sum;
    alert(sum);
}