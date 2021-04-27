
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.
// You may use your BST implementation to test this out.
function findMin(root) {
  // go as left as possible
  if (!root) return null;
  let current = root;

  while (current.left) {
    current = current.left;
  }
  return current;
}


module.exports = {
  findMin
};
