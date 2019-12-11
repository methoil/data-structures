class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, val) {
    const index = this._hash(key);
    this.data[index] = val;
  }

  get(key, val) {
    const index = this._hash(key);
    return this.data[index];
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("level that I am over", 9000);
console.log(`I have ${myHashTable.get("grapes")} grapes`);
myHashTable.set("level that you are at", 10);
console.log(`I have ${myHashTable.get("apples")} apples`);
