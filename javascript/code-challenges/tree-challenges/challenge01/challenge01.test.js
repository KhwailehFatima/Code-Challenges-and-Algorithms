'use strict'

const { Node, createTree } = require('./challenge01');

describe('Testing Challenge-01', () => {
    it('it should be null if the tree is empty', () => {
        let inorder = [];
        let preorder = [];
        let tree = createTree(inorder, preorder);
        expect(tree).toEqual(null);
    })

    it('should return the root node of the tree when preorder = [3,9,20,15,7], inorder = [9,3,15,20,7] to be an output: [3,9,20,null,null,15,7]', () => {
        // let output = [3, 9, 20, null, null, 15, 7];
        let inorder = [9, 3, 15, 20, 7];
        let preorder = [3, 9, 20, 15, 7];
        let tree = createTree(inorder, preorder);
        expect(tree.value).toEqual(3);
        expect(tree.left.value).toEqual(9);
        expect(tree.right.value).toEqual(20);
        expect(tree.right.left.value).toEqual(15);
        expect(tree.right.right.value).toEqual(7);
    })
    it('It should return the root node of the tree when preorder = [-1], inorder = [-1]',()=>{
        let inorder=[-1];
        let preorder=[-1];
        let tree=createTree(inorder,preorder);
        expect(tree.value).toEqual(-1);
    })
});

