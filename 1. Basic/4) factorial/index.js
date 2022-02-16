function factorial(n) {
    if((n > 0) && (n <= 10)) {
        let count = 1;
        for (let i = 2; i <= n; i++) {
            count *= i;
        }
        return count;
    }
    else {
        console.log("Неверное значение n");
    }
}


window.factorial = factorial;

export default factorial;
