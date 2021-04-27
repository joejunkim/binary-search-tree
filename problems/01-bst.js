class TreeNode {
    constructor(val) {
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BST {
    // Initialize an empty binary search tree
    constructor() {
        this.root = null;
    }

    // Insert a node into the binary search tree
    insert(val, currentNode = this.root) {
        const newNode = new TreeNode(val);
        if (!currentNode) {
            this.root = newNode;
            return;
        }

        while (currentNode) {
            if (newNode.val >= currentNode.val) {
                if (currentNode.right) {
                    currentNode = currentNode.right;
                } else {
                    currentNode.right = newNode;
                    return;
                }
            } else if (newNode.val < currentNode.val) {
                if (currentNode.left) {
                    currentNode = currentNode.left;
                } else {
                    currentNode.left = newNode;
                    return;
                }
            }
        }
    }

    // ALTERNATIVE SOLUTION THAT WORKS TOO, BUT USES RECURISON INSTEAD OF ITERATION
    // insert(val, currentNode=this.root) {
    //     if (!currentNode) {
    //         this.root = new TreeNode(val);
    //         return;
    //     }

    //     if (newNode.val >= currentNode.val) {
    //         if (currentNode.right) {
    //             this.insert(val, currentNode.right);
    //         } else {
    //             currentNode.right = new TreeNode(val);
    //         }
    //     } else if (newNode.val < currentNode.val) {
    //         if (currentNode.left) {
    //             this.insert(val, currentNode.left);
    //         } else {
    //             currentNode.left = new TreeNode(val);
    //         }
    //     }
    // }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode = this.root) {
        if (!currentNode) return false;
        if (currentNode.val === val) return true;

        if (val < currentNode.val) {
            if (currentNode.left) {
                return this.searchRecur(val, currentNode.left)
            } else {
                return false;
            }
        } else {
            if (currentNode.right) {
                return this.searchRecur(val, currentNode.right)
            } else {
                return false;
            }
        }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val, currentNode = this.root) {
        if (!currentNode) return false;
        while (currentNode) {
            if (val < currentNode.val) {
                if(currentNode.left){
                    currentNode = currentNode.left;
                } else {
                    return false;
                }
            } else if (val > currentNode.val) {
                if(currentNode.right){
                    currentNode = currentNode.right;
                } else {
                    return false;
                }
            } else {
                return true;
            }
        }
    }
}

module.exports = {
    TreeNode,
    BST
};
