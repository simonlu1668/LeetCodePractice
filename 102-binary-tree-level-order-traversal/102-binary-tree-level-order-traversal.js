var levelOrder = function(root) {
    if (root == null) return [];
    let queue = [], values = [];
    queue.push(root);
    while (queue.length > 0) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        values.push(level);
    }
    return values;
}