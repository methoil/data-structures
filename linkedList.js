class linkedList {
  constructor() {
    this.head = this.makeNode(0, null);
    this.tail = this.head;
  }

  makeNode(data, next) {
    return { data, next };
  }

  appendNode(data) {
    const newNode = this.makeNode(data, null);
    this.tail.next = newNode;
    this.tail = newNode;
  }

  printList(currNode) {
    if (currNode == null) {
      return;
    }
    console.log(currNode.data);
    this.printList(currNode.next);
  }
}
