function basicCalc(operation, a, b) {
  switch (operation) {
      case '+':
          return a + b;
      case '-':
          return a - b;
      case '/':
          return a / b;
      case '*':
          return a * b;
      default:
          console.log("Неверная операция");
    }
}

console.log(basicCalc('+', 4, 5));
console.log(basicCalc('-', 4, 5));
console.log(basicCalc('/', 7, 5));
console.log(basicCalc('*', 78, 34));

window.basicCalc = basicCalc;

export default basicCalc;
