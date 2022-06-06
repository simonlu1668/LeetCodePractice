/**
 * @param {number} size
 */
var MovingAverage = function(size) {
    this.maxLength = size;
    this.queue = [];
};

/** 
 * @param {number} val
 * @return {number}
 */
MovingAverage.prototype.next = function(val) {
    if(this.queue.length === this.maxLength){
        this.queue.shift();
        this.queue.push(val);
    } else {
        this.queue.push(val);
    }
    let sum = 0;
    for(let i = 0; i < this.queue.length; i++){
        sum+= this.queue[i];
    }
    console.log(sum, this.queue.length);
    return sum/this.queue.length;
};

/** 
 * Your MovingAverage object will be instantiated and called as such:
 * var obj = new MovingAverage(size)
 * var param_1 = obj.next(val)
 */