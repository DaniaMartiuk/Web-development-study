var classof = function (object) {
    return Object.prototype.toString.call(object)
}

console.log(classof(""));
console.log(classof([]));