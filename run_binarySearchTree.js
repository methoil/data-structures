const imp = require("./binarySearchTree");

const tree = new imp.binarySearchTree();
// tree.addNodes([4, 7, 3, 44, -3, -5, -33, 23, -1, 6, -76, 99]);
tree.addNodes([-5, -33, -2, -3, 44, 1, 2, 3, 4, 5]);
// console.log(tree);
console.log('pre order:');
tree.preOrderTraversal();

console.log('in order:');
tree.inOrderTraversal();

console.log('post order:');
tree.postOrderTraversal();
