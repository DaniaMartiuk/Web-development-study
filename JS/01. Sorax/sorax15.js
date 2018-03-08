var counter = (function(){
    var count = 0;
    return function () {
        count = num !== undefined ? num : count;
        return count++;
    }
});

console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter(0));
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());

