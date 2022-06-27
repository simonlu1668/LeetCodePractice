
var RandomizedSet = function() {
    this.randomizedSet = {};
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if(!this.randomizedSet[val]){
        this.randomizedSet[val] = 1;
        return true;
    } else {
        return false;
    }
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if(this.randomizedSet[val]){
        delete this.randomizedSet[val];
        return true;
    } else {
        return false;
    }
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    let objectKeys = Object.keys(this.randomizedSet);
    if(objectKeys.length == 1) return objectKeys[0];
    
    let randomIndex = Math.floor(Math.random() * objectKeys.length);
    return objectKeys[randomIndex];
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */