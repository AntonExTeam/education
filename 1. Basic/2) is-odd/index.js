function isOdd(a) {
    return a % 2 == 0;
}
console.log(isOdd(7));

window.isOdd = isOdd;

export default isOdd;
