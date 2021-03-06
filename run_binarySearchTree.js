const imp = require("./binarySearchTree");

const tree = new imp.binarySearchTree();
// tree.addNodes([4, 7, 3, 44, -3, -5, -33, 23, -1, 6, -76, 99]);
tree.addNodes([-5, -33, -2, -3, 44, 1, 2, 3, 4, 5, 99]);
tree.addNodes([-5, -33, -2, -3, 44, 1, 2, 3, 4, 5, 99]);
// console.log(tree);
console.log("pre order:");
tree.preOrderTraversal();

console.log("in order:");
tree.inOrderTraversal();

console.log("post order:");
tree.postOrderTraversal();

function traverse(node) {
  const tree = { data: node.data };
  tree.lChild = node.lChild === null ? null : traverse(node.lChild);
  tree.rChild = node.rChild === null ? null : traverse(node.rChild);
  return tree;
}

console.log(JSON.stringify(traverse(tree.head)));
console.log(tree.lookup(-33));
console.log(tree.lookup(1));
console.log(tree.lookup(44));
console.log(tree.lookup(5454)); // null
console.log(tree.lookup(-88)); // null
console.log(tree.lookup(666)); // null
console.log(tree.lookup(99));
