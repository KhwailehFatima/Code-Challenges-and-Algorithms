// Write your test here
 const {treeBreathFirst}=require('./challenge02');

 describe( 'treeBreathFirst', () => {
    it( 'should return true if the trees are identical', () => {
        expect( treeBreathFirst({ value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }, { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } }) ).toBe( true );
    } );
    it( 'should return false if the trees are not identical', () => {
        expect( treeBreathFirst( { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: null } },  { value: 1, left: { value: 2, left: null, right: null }, right: { value: 3, left: null, right: { value: 4, left: null, right: null  } } } ) ).toBe( false );
    }
    );
} );