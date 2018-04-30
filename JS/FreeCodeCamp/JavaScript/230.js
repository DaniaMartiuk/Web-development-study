function addTogether() {

    var checkNum = function(num) {
        if (typeof num !== 'number') {
            return undefined;
        } else
            return num;
    };

    if (arguments.length > 1) {
        var a = checkNum(arguments[0]);
        var b = checkNum(arguments[1]);
        if (a === undefined || b === undefined) {
            return undefined;
        } else {
            return a + b;
        }
    } else {

        var c = arguments[0];

        if (checkNum(c)) {
            return function(arg2) {
                if (c === undefined || checkNum(arg2) === undefined) {
                    return undefined;
                } else {
                    return c + arg2;
                }
            };
        }
    }
}

// test here

function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
}


telephoneCheck("555-555-5555");
