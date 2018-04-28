
function whatIsInAName(collection, source) {
    // What's in a name?
    var hello  = Object.keys(source);
    // Only change code below this line


    // Only change code above this line
    return collection.filter(function (obj) {
        for(var i = 0; i < hello.length; i++) {
            if(!obj.hasOwnProperty(hello[i]) || obj[hello[i]] !== source[hello[i]]) {
                return false;
            }
        }
        return true;
    });
}

// test here
whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });