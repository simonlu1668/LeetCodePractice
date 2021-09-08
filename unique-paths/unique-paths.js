/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n, memo = {}) {
    
    var key = m + ',' + n;

    if(key in memo) return memo[key]
    if (n === 0 || m === 0) {
        return 0;
    }

    if (n === 1 && m === 1) {
        return 1;
    }

    memo[key] = uniquePaths(n-1,m, memo) + uniquePaths(n, m-1,memo);

    return memo[key];
};