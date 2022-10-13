function treeBreathFirst(p, q) {
    if (!p || !q) return false;
    if (!p && !q) return true;
    if (p.value !== q.value) return false;
    return (
        treeBreathFirst(p.left, q.left) && treeBreathFirst(p.right, q.right)
    );
}
module.exports= {treeBreathFirst};