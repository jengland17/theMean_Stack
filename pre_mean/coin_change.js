function make_change(num) {

    let wallet = { 'dollar': 0, 'quarter': 0, 'dime': 0, 'nickel': 0, 'penny': 0 }

    while (num > 0) {
        if (num >= 100) {
            wallet.dollar = wallet.dollar + 1;
            num = num - 100;
        }

        if (num >= 25) {
            wallet.quarter = wallet.quarter + 1;
            num = num - 25;
        }

        else if (num >= 10) {
            wallet.dime++;
            num = num - 10;
        }

        else if (num >= 5) {
            wallet.nickel++;
            num = num - 5;
        }

        else {
            wallet.penny++;
            num = num - 1;

        }

    }

    if (wallet.dollar == 0) {
        delete(wallet.dollar);
    }

    if (wallet.quarter == 0) {
        delete(wallet.quarter);
    }

    if (wallet.dime == 0) {
        delete(wallet.dime);
    }

    if (wallet.nickel == 0) {
        delete(wallet.nickel);
    }

    if (wallet.penny == 0) {
        delete(wallet.penny);
    }

    console.log(wallet);

}

make_change(465);