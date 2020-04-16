class node {
    constructor(letter, isWord) {
        this.letter = letter;
        this.isWord = isWord || false;
        this.children = [];
    }
}

class Trie {
    constructor() {
        this.root = new node('root');
    }
    
    insert(word) {
        let currNode = this.root;
        word.split('').forEach((letter, idx) => {
            const match = currNode.children.find(child => child.letter === letter);
            if (match) {
                currNode = match;            
            } else {
                const newNode = new node(letter);
                currNode.children.push(newNode);
                currNode = newNode;
            }
            if (idx === word.length - 1) {
                currNode.isWord = true;
            }
        });
    }
    
    search(word) {
        const endNode = this._getNodeOfPrefix(word);
        return endNode && endNode.isWord || false;
    }
    
    startsWith(prefix) {
        const localRoot = this._getNodeOfPrefix(prefix);
        return this._startsWithSearch(localRoot);
    }
    
    _getNodeOfPrefix(word) {
        let currNode = this.root;
        for (let letter of word) {
           const match = currNode.children.find(child => child.letter === letter);
            if (match) {
                currNode = match;
            } else {
                return null;
            }
        }
        return currNode;
    }
    
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
