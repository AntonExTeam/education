/*
  Задача
  Написать стак стек в котором есть следующие методы
  push - добавляет элимент в конец стека
  pop - возвращяет удаляет последний элемент из стека, если стек уже пустой генерирует ошибку с ссобщением: "Stack is empty!"
  isEmpty - проверяет является ли стек пустым
  print - выводит стек в формате
  И имеет свойство:
  size - количество элиментов в списке
  Пример кода
  const stack = new Stack();
  stack.push(1);
  stack.print() // [1]
  stack.pop().isEmpty(); // true
  stack.pop(); // error
  stack.push(2).push(3).pop()
  stack.push(10).push(14).pop().print() // "[2, 10]"
 */

class Stack {

    constructor() {
        this.arr = [];
    }

    push(elem) {
        this.arr.push(elem);
        return this;
    }

    pop() {
        if(this.arr.length === 0) {
            throw new Error("Stack is empty!");
        }
        this.arr.pop();
        return this;
    }

    isEmpty() {
        return this.arr.length === 0;

    }

    print() {
        return `[${this.arr.join(', ')}]`;
    }

    get size() {
        return this.arr.length;
    }

}

window.Stack = Stack;

export default Stack;
