class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top && this.top.val || null;
    }

    push(val) {
        const newNode = new Node(val);
        if (this.top == null) {
            this.top = newNode;
            this.bottom = this.top;
        } else {
            this.top.next = newNode;
            this.top = newNode;
        }

        this.length++;
        return this.top;
    }

    pop() {
        let returnVal = null;
        if (this.length === 0) {
            return returnVal;
        } else {
            returnVal = this.top.val;

            if (this.length === 1) {
                this.top = null;
                this.bottom = null;
            } else {
                let prevLastNode = this.bottom;
                for (let i = 1; i < this.length - 1; i++) {
                    prevLastNode = prevLastNode.next;
                }
                prevLastNode.next = null;
                delete this.top;
                this.top = prevLastNode;
            }

            this.length--;
            return returnVal
        }
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