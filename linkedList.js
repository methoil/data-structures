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

  appendNodes(dataArray) {
    for (let data of dataArray) {
      this.appendNode(data);
    }
  }

  printList(currNode) {
    if (currNode == null) {
      return;
    }
    console.log(currNode.data);
    this.printList(currNode.next);
  }


  reverseList() {
    this.swapNodesRecursively(this.head, null);
    const tempHead = this.head;
    this.head = this.tail;
    this.tail = tempHead;
  }

  swapNodesRecursively(node, prevNode) {
    const nextNode = node.next;

    if (nextNode !== null) {  
      this.swapNodesRecursively(nextNode, node);
    }

    node.next = prevNode;
    return;
  }
}
