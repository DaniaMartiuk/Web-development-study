function validateHello(greetings) {
    var regex = /ahoj|czesc|ciao|salut|hallo|hola|hello/i;
    var res = regex.test(greetings);
    return res
}
