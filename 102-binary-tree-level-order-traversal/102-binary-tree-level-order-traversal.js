var levelOrder = function(root) {
    if (root == null) return [];
    let queue = [root], result = [];
    while (queue.length) {
        let len = queue.length, level = [];
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            level.push(node.val);
            if (node.left) queue.push(node.left);
            if (node.right) queue.push(node.right);
        }
        result.push(level);
    }
    return result;
}