class Stack {
    constructor() {
        this.array = [];
    }

    peek() {
        return this.array.slice(-1)[0];
    }

    push(val) {
        this.array.push(val);
    }

    pop() {
        return this.array.pop();
    }
}

const stack = new Stack();
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.pop());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.peek());
