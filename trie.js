class node {
  constructor(letter, isWord) {
    this.letter = letter;
    this.isWord = isWord || false;
    this.children = {}; // {[key: letter | 'root']: INode}
  }
}

class Trie {
  constructor() {
    this.root = new node("root");
  }

  insert(word) {
    let currNode = this.root;
    word.split("").forEach((letter, idx) => {
      const match = currNode.children[letter];
      if (match) {
        currNode = match;
      } else {
        const newNode = new node(letter);
        currNode.children[letter] = newNode;
        currNode = newNode;
      }
    });
    currNode.isWord = true;
  }

  search(word) {
    const endNode = this._getNodeOfPrefix(word);
    return (endNode && endNode.isWord) || false;
  }

  startsWith(prefix) {
    return !!this._getNodeOfPrefix(prefix);
  }

  remove(word) {
    const nodePath = [];
    let currNode = this._getNodeOfPrefix(word, nodePath);
    if (!currNode) {
      return "nothing to remove";
    }
    currNode.isWord = false;

    // Remove unused letters
    while (nodePath.length) {
      if (!currNode.children.keys.length) {
        const parent = nodePath.pop();
        delete parent.children[currNode.letter];
        currNode = parent;
      } else {
        break; // stop deleting if the node is still used elsewhere
      }
    }

    return "removed word from trie";
  }

  // nodePath is optional parameter - can I make this a pure function and not duplicate code????
  _getNodeOfPrefix(word, nodePath) {
    let currNode = this.root;
    for (let letter of word) {
      const match = currNode.children[letter];
      if (match) {
        if (Array.isArray(nodePath)) {
          nodePath.push(match);
        }
        currNode = match;
      } else {
        return null;
      }
    }
    return currNode;
  }

  // Could be used to validate that all paths starting from this letter lead to a word; not currently used
  _startsWithSearch(node) {
    if (!node) {
      return false;
    }
    if (node.isWord) {
      return true;
    }
    for (let child of node.children) {
      return this._startsWithSearch(child);
    }
    return false;
  }
}
