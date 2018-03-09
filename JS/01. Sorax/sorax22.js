var   Vec2 = function(x,y) {
    this.x = x;
    this.y = y;
};
Vec2.prototype.add = function(vec) {
    this.x += ves.x
    this.y += ves.y
    return this
}

var world = {
    gravity: new Vec2(0, 1)
};
var object = {
    positipn: new Vec2(10,20),
    speed: new Vec2(1,2),
    update: function{
    this.position
        .add(this.speed)
        .add(wotld.gravity);
    }
};
console.log(object.position);