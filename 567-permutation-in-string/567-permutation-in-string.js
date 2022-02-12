/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function(s1, s2) {
    let answer = false;
    let hashmap = {};
    for(const e of s1) {
        hashmap[e] === undefined ? hashmap[e] = 1 : hashmap[e]++;
    }
    let left = 0;
    let right = s1.length;
    
    while(right <= s2.length) {
    let hashmap2 = {...hashmap}
    console.log(hashmap2);
    let count = 0;
        for(let i = left; i < right; i++){
            if(hashmap2[s2[i]]) {
                count++;
                hashmap2[s2[i]]--;
            }
            if(hashmap2[s2[i]] === 0) delete hashmap2[s2[i]];
            if(count == s1.length) return true;
        }
        left+=1;
        right+=1;
    }
    
   return false;
};