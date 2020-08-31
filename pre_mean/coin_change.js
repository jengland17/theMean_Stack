function make_change(num) {

    var quarter = 0;
    var dime = 0;
    var nickel = 0;
    var penny = 0;

    while (num > 0) {
        if (num >= 25) {
            quarter = quarter + 1;
            num = num - 25;
        }
        else if (num >= 10) {
            dime++;
            num = num - 10;
        }
        else if (num >= 5) {
            nickel++;
            num = num - 5;
        }
        else {
            penny++;
            num = num - 1;

        }

    }

    console.log("quarters:",quarter);
    console.log("dimes:", dime);
    console.log("nickels:", nickel);
    console.log("pennies:",penny);
}

make_change(68);