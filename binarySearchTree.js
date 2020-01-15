class Node {
  constructor(data) {
    this.data = data;
    this.lChild = null;
    this.rChild = null;
  }
}

class binarySearchTree {
  constructor() {
    this.head = null;
  }

  addNodes(dataArray) {
    for (let data of dataArray) {
      this.insert(data);
    }
  }

  insert(data) {
    if (!this.head) {
      this.head = new Node(data);
      return this.head;
    }

    let currNode = this.head;
    while (currNode !== null) {
      if (data < currNode.data) {
        if (!currNode.lChild) {
          currNode.lChild = new Node(data);
          return currNode.lChild;
        }
        currNode = currNode.lChild;
      } else {
        if (!currNode.rChild) {
          currNode.rChild = new Node(data);
          return currNode.rChild;
        }
        currNode = currNode.rChild;
      }
    }
  }

  remove(data) {
    let prevNode = null;
    let currNode = this.head;

    while (currNode != null) {
      if (currNode.data === data) {
        // no right child
        if (currNode.rChild == null) {
          // removing head
          if (prevNode == null) {
            this.head = currNode.lChild;
          }

          if (prevNode.rChild.data === currNode.data) {
            prevNode.rChild = currNode.lChild;
          } else {
            prevNode.lChild = currNode.lChild;
          }
        } // right child with no left
        else if (currNode.rChild && !currNode.rChild.lChild) {
          // removing head
          if (prevNode == null) {
            currNode.rChild.lChild = currNode.lChild;
            this.head = currNode.rChild;
          }

          if (prevNode.rChild.data === currNode.data) {
            prevNode.rChild = currNode.rChild;
          } else {
            prevNode.lChild = currNode.rChild;
          }
        } // right with a left - get the descendant
        else {
          let replacingNode = currNode.rChild;
          while (replacingNode.lChild != null) {
            replacingNode = replacingNode.lChild;
          }
          replacingNode.lChild = currNode.lChild;
          replacingNode.rChild = currNode.rChild;

          // removing head
          if (prevNode == null) {
            this.head = replacingNode;
          }

          if (prevNode.rChild.data === currNode.data) {
            prevNode.rChild = replacingNode;
          } else {
            prevNode.lChild = replacingNode;
          }
        }
        prevNode.lChild = currNode.lChild;
        if (prevNode.lChild) {
          prevNode.lChild.rChild = currNode.rChild;
        }
      } else if (data < currNode.data) {
        prevNode = currNode;
        currNode = currNode.lChild;
      } else {
        prevNode = currNode;
        currNode = currNode.rChild;
      }
    }
  }

  lookup(data) {
    let currNode = this.head;
    while (currNode != null) {
      if (currNode.data === data) {
        return currNode;
      } else if (data < currNode.data) {
        currNode = currNode.lChild;
      } else {
        currNode = currNode.rChild;
      }
    }

    return null;
  }

  // TODO - these traversals may not be right...
  inOrderTraversal(node = this.head) {
    if (!node) {
      return;
    }

    if (node.lChild !== null) {
      this.preOrderTraversal(node.lChild);
    }
    console.log(node.data);

    if (node.rChild) {
      this.preOrderTraversal(node.rChild);
    }
  }

  preOrderTraversal(node = this.head) {
    if (!node) {
      return;
    }
    console.log(node.data);

    if (node.lChild !== null) {
      this.preOrderTraversal(node.lChild);
    }

    if (node.rChild) {
      this.preOrderTraversal(node.rChild);
    }
  }

  postOrderTraversal(node = this.head) {
    if (!node) {
      return;
    }

    if (node.lChild !== null) {
      this.preOrderTraversal(node.lChild);
    }

    if (node.rChild) {
      this.preOrderTraversal(node.rChild);
    }
    console.log(node.data);
  }
}

module.exports.binarySearchTree = binarySearchTree;
