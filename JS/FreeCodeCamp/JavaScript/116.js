
var array = [4,5,6,7,8];
var singleVal = 0;

// Only change code below this line.

var singleVal = array.reduce(function(total, val) {
    return total + val;
});
