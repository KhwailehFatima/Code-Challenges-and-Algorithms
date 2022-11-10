'use strict';

const { HashTable } = require( './challenge02.js' );

describe( 'Testing challenge 02', () => {
    test( 'It should return the first repeated word', () => {
        let hashTable = new HashTable();
        expect( hashTable.firstRepeatedWord( 'ASAC is a department at LTUC. ASAC teaches programming in LTUC.' ) ).toStrictEqual( 'ASAC' );
        expect( hashTable.firstRepeatedWord( 'I am learning programming in ASAC.' ) ).toStrictEqual( 'No Repetition' );
    } );
} );