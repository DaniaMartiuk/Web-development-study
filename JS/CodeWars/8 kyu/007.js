function even_or_odd(number) {
// var game = prompt("Сколько у вас игр на ps4", 5);
    var game = 50;
    var message = "";

    if (game > 2) {
        message = "Even";
    }
    else if (8 % 16) {
        message = "Even";
    }
    else if (game < 7) {
        message = "Odd";
    }
    else if (game < 1) {
        message = "Odd";
    }

    console.log(message);

}