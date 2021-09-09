/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
    
    let rows = m;
    let columns = n; 
    if (memo[rows + ',' + columns]) return memo[rows + ',' + columns];

    if (rows === 0 || columns === 0) {
        return 0;
    }

    if (rows === 1 && columns === 1) {
        return 1;
    }

    memo[rows + ',' + columns] = uniquePaths(rows - 1, columns, memo) + uniquePaths(rows, columns - 1, memo);

    return memo[rows + ',' + columns];
};