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


window.basicCalc = basicCalc;

export default basicCalc;
