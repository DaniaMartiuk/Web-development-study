
function slasher(arr, howMany) {
    arr.splice(0, howMany);
    // it doesn't always pay to be first
    return arr;
}

slasher([1, 2, 3], 2);
