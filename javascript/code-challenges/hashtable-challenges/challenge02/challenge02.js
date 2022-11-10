class HashTable {
    constructor () {
        this.storage = {};
        this.size = 0;
    }

    set ( key, value ) {
        if ( !this.storage[ key ] ) {
            this.storage[ key ] = { value: value };
            this.size++;
        }
    }

    firstRepeatedWord ( string ) {
        if (!string.includes(' ')) return 'No Repetition';
        let arr = string.split(' ');
        for (let i = 0; i < arr.length; i++) {
            if (this.storage[arr[i]]) {
                return arr[i];
            } else {
                this.set(arr[i], arr[i]);
            }
        }
        return 'No Repetition';
    }
}

module.exports = { HashTable };