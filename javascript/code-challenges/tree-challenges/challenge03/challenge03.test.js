const convertSortedArrToBT = require( './challenge03' );

describe( 'convertSortedArrToBT', () => {
    it( 'Return a binary search tree', () => {
        const nums = [ -10, -3, 0, 5, 9 ];
        const expected = {
            value: 0,
            left: {
                value: -3,
                left: {
                    value: -10,
                    left: null,
                    right: null
                },
                right: null
            },
            right: {
                value: 9,
                left: {
                    value: 5,
                    left: null,
                    right: null
                },
                right: null
            }
        };
        expect( convertSortedArrToBT( nums ) ).toEqual( expected );
    } );

    it( 'Return a binary search tree', () => {
        const nums = [ 1, 3 ];
        const expected = {
            value: 3,
            left: {
                value: 1,
                left: null,
                right: null
            },
            right: null
        };
        expect( convertSortedArrToBT( nums ) ).toEqual( expected );
    } );
} );