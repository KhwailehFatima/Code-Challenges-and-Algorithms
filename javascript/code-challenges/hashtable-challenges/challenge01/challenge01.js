'use strict';

class Node {
    constructor ( value = null ) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class Tree {
    constructor ( root ) {
        this.root = root || null;
    }
    preOrder () {
        let result = [];
        let loop = ( node ) => {
            if ( node && node.value ) {
                result.push( node.value );
                if ( node.left ) loop( node.left );
                if ( node.right ) loop( node.right );
            }
        };
        loop( this.root );
        return result;
    }
}

class HashTable {
    constructor ( size ) {
        this.size = size;
        this.storage = new Array( size );
    }

    set ( key, value ) {
        if ( !this.storage[ key ] ) this.storage[ key ] = [ value ];
        this.storage[ key ] = [ ...this.storage[ key ], value ];
    }

    checkSum ( tree, num ) {
        tree.preOrder().forEach( ( value ) => {
            tree.preOrder().forEach( ( value2 ) => {
                if ( value !== value2 ) this.set( value, value2 );
            } );
        } );
        return this.storage
            .map( ( _, idx ) =>
                this.storage[ idx ]?.find( ( value2 ) => idx + value2 === num && idx !== value2 )
            )
            .filter( ( value ) => value ).length ? true : false;
    }
}

module.exports = { Node, Tree, HashTable };