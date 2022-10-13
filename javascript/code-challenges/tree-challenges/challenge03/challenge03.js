function Node(value, left = null, right = null) {
    this.value = value;
    this.left = left;
    this.right = right;
}

function convertSortedArrToBT(nums) {
    if (nums.length === 0) { return null };

    const mid = Math.floor(nums.length / 2);

    const root = new Node(nums[mid]);
    root.left = convertSortedArrToBT(nums.slice(0, mid));
    root.right = convertSortedArrToBT(nums.slice(mid + 1));
    return root;
}

module.exports = convertSortedArrToBT;