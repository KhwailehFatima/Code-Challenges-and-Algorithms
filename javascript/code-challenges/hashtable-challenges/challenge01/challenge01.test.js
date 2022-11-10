'use strict';

const { Node, Tree, HashTable } = require('./challenge01');

describe( 'Testing hash table challenge 1', () => {
    it( 'should return true if Binary search tree has two elements that their summation is the given integer', () => {
        let tree = new Tree();
        tree.root = new Node( 7 );
        tree.root.left = new Node( 2 );
        tree.root.right = new Node( 9 );
        tree.root.left.left = new Node( 1 );
        tree.root.left.right = new Node( 5 );
        tree.root.right.right = new Node( 14 );
        let hashTable = new HashTable( 200 );
        expect( hashTable.checkSum( tree, 3 ) ).toEqual( true );
        expect( hashTable.checkSum( tree, 4 ) ).toBeFalsy();
    } );
} );