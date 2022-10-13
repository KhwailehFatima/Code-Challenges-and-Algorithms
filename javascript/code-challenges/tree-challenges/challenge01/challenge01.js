// Write here the code challenge solution
'use strict'

class Node {
    constructor(value, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

//recursive tree solution
function createTree(inorder, preorder) {
    if (inorder.length === 0 || preorder.length === 0) {
        return null;
    };

    let treeRoot = new Node(preorder[0]);
    let treeIndexRoot = inorder.indexOf(preorder[0]);
    let leftInorder = inorder.slice(0, treeIndexRoot);
    let rightInorder = inorder.slice(treeIndexRoot + 1);
    let leftPreorder = preorder.slice(1, treeIndexRoot + 1);
    let rightPreorder = preorder.slice(treeIndexRoot + 1);
    treeRoot.left=createTree(leftInorder, leftPreorder);
    treeRoot.right=createTree(rightInorder, rightPreorder);
    return treeRoot;
}

module.exports = { Node, createTree };
