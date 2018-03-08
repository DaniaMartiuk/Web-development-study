var func = function () {
    var i = 10;
    console.log(i)
    var func = function () {
        var i = 15;
        console.log(i)
    };
    innerFunc();
};     
func();