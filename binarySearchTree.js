class binarySearchTree {
  constructor() {
    this.head = this.generateNode(0);
  }

  addNodes(dataArray) {
    for (let data of dataArray) {
      this.addNode(data);
    }
  }

  addNode(data) {
    let prevNode = null;
    let currNode = this.head;
    while (currNode !== null) {
      if (data < currNode.data) {
        prevNode = currNode;
        currNode = prevNode.lChild;
      } else {
        prevNode = currNode;
        currNode = prevNode.rChild;
      }
    }

    if (data < prevNode.data) {
      prevNode.lChild = this.generateNode(data);
    } else {
      prevNode.rChild = this.generateNode(data);
    }
  }

  generateNode(data) {
    return {
      data,
      lChild: null,
      rChild: null
    };
  }
}

module.exports.binarySearchTree = binarySearchTree;
