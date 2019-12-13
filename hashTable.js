class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  set(key, val) {
    const index = this._hash(key);
    if (!this.data[index]) {
      this.data[index] = [[key, val]];
    } else {
      const entry = this._findKeyAtIndex(index, key);
      entry ? (entry.val = val) : this.data[index].push([key, val]);
    }
  }

  get(key) {
    const index = this._hash(key);
    if (!this.data[index]) {
      return undefined;
    }

    const entry = this._findKeyAtIndex(index, key);
    return entry[1];
  }

  _findKeyAtIndex(index, key) {
    return this.data[index].find(entry => entry[0] == key);
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
myHashTable.set("myLevel", 9000);
console.log(`The level I am at is over ${myHashTable.get("myLevel")}`);
myHashTable.set("yourLevel", 10);
console.log(`Your puny level is at ${myHashTable.get("yourLevel")}`);
myHashTable.set("grapes", 666);
myHashTable.set("apples", 9);
myHashTable.set("apples", 99);
console.log(`grapes are ${myHashTable.get("grapes")}`);
console.log(`apples are ${myHashTable.get("apples")}`);
