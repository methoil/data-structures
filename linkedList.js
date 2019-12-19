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
  
  prepend(data) {
    const newNode = this.makeNode(data, this.head);
    this.head = newNode;
  }
  
  insert(data, index) {
    if (!this.head) {
      return;
    }
    
    let currIndex = 0;
    let prevNode = null;
    let currNode = this.head;
    do {
      if (currIndex === index) {
        const newNode = this.makeNode(data, currNode);
        if (currNode === this.head) {
          this.head = newNode;
          return 'node added at head';
        } 
        
        prevNode.next = newNode;
        
        if (this.prevNode === this.tail) {
          this.tail = newNode;
          return 'node added at tail';
        } 
        
        return 'node added';
      }
      
      currIndex++;
      prevNode = currNode;
      currNode = currNode.next;      
    } 
    while(prevNode != null);

    // TODO: keeping track of length would help, no need to traverse whole list here - is that allowed?
    return 'node not added - the list may be shorter than the input index';
  }
  
  remove(index) {
    if (!this.head) {
      return;
    }
    
    let currIndex = 0;
    let currNode = this.head;
    let prevNode = null;
    
   do {
      if (currIndex === index) {
        if (currNode === this.head) {
          delete this.head; // any point in this???? probably not
          this.head = currNode.next;
          return 'head node deleted';
        } 
                
        if (currNode === this.tail) {
          delete this.tail; // no need for this...
          this.tail = prevNode;
          return 'tail delted';
        } 
        
        prevNode.next = currNode.next;
        delete currNode;
        return 'node deleted';
      }
      
      currIndex++;
      prevNode = currNode;
      currNode = currNode.next;      
    } 
    while(currNode != null);
    
    return 'node not deleted - is the provided index larger than the list lenght?';
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
