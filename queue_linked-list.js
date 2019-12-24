const linkedList = require("./linkedList");

class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first && this.first.data || null;
    }

    enqueue(val) {
        console.log(linkedList);
        console.log(linkedList.Node);
        const newNode = new linkedList.Node(val);
        if (this.first == null) {
            this.first = newNode;
            this.last = this.first;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }

        this.length++;
        return this.first;
    }

    dequeue() {
        let returnVal = null;
        if (this.length === 0) {
            return returnVal;
        }
        else {
            returnVal = this.first.data;

            if (this.length === 1) {
                this.first = null;
                this.last = null;
            } else {
                this.first = this.first.next;
            }

            this.length--;
            return returnVal
        }
    }
}

const queue = new Queue();
console.log(queue.enqueue(1));
console.log(queue.enqueue(2));
console.log(queue.enqueue(3));
console.log(queue.dequeue());
console.log(queue.peek());
console.log(queue.dequeue());
console.log(queue.dequeue());