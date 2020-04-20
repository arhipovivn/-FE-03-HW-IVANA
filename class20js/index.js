// Напишите функцию, которая получает три числа и возвращает их сумму
function ret(a, b, c) {
    return (a + b + c);

}
console.log(ret(3, 2, 3));

// Напишите функцию, которая подсчитывает сумму чисел от 1 до заданного X.


function Suum(x) {
    let i, sum = 0;
    for (i = 1; i <= x; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(Suum(5));

//Напишите функцию, которая считает факториал числа.
function fact(n) {
    let a = 1;
    for (let i = 2; i <= n; i++) {
        a = a * i;

    }
    return a

}
console.log(fact(5));

// Создайте функцию, которая получает в качестве аргументов три числа и возвращает наименьшее из них.
function a(a, b, c) {
    if (a < b && a < c)
        return a;
    if (b < a && b < c)
        return b;
    if (c < a && c < b)
        return c;
}
console.log(a(5, 2, 3));
//  Создайте функцию, которая получает в качестве аргументов значения суток, часов и минут, а возвращает соответствующее им количество секунд.
let sec = (c, d, e) => c * 86400 + d * 3600 + e * 60;
console.log(sec(1, 2, 3));
//  Напишите рекурсивную функцию для подсчёта факториала числа.
function factorial(n) {
    if (n == 1) return 1;
    return n * factorial(n - 1)
}
console.log(factorial(4))
    //  Напишите рекурсивную функцию, которая разворачивает введённое число задом наперёд. Например, если на вход функция получает 1234, вернуть она должна 4321.

function rev(n) {
    let res = 0;
    let h;
    let t = n;
    while (t) {
        h = t % 10;
        t = (t - h) / 10;
        res = res * 10 + h;
    }
    return res;
}
console.log(rev(123))