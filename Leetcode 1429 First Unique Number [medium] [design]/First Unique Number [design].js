/**
 * @param {number[]} nums
 */
var FirstUnique = function(nums) {
    this.queue = [];
    this.map = new Map();
    for (let num of nums) {
        this.add(num);
    }
};

/**
 * @return {number}
 */
FirstUnique.prototype.showFirstUnique = function() {
    while (this.queue.length > 0 && this.map.get(this.queue[0]) > 1) {
        this.queue.shift();
    }
    
    if (this.queue.length === 0) {
        return -1;
    }
    
    return this.queue[0];
};

/** 
 * @param {number} value
 * @return {void}
 */
FirstUnique.prototype.add = function(value) {
    if (!this.map.has(value)) {
        this.map.set(value, 1);
    } else {
        this.map.set(value, this.map.get(value) + 1);
    }
    this.queue.push(value);
};

/** 
 * Your FirstUnique object will be instantiated and called as such:
 * var obj = new FirstUnique(nums)
 * var param_1 = obj.showFirstUnique()
 * obj.add(value)
 */