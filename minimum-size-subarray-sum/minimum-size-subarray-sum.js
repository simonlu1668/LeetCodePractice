/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    var length = Infinity;
    var startingWindow = 0;
    var sum = 0;
    var currentLength = 0;

    for (var i = 0; i < nums.length; i++) {
        sum += nums[i];
        currentLength++;

        while (sum >= target) {
            if (sum >= target) {
                if (length > currentLength) {
                    length = currentLength;
                }
            }
            sum -= nums[startingWindow];
            currentLength--;
            startingWindow++;
        }
    }
    
    if(length === Infinity) {
        return 0;
    }
    return length;
};