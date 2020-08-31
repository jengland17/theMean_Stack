function bracesValid(arr) {

    var count = 0

    for (let i=0; i < arr.length; i++){

        if (arr[i] == "(" || arr[i] == "[" || arr[i] == "{"){
            count++;
        }

        else if (arr[i] == ")" || arr[i] == "]" || arr[i] == "}") {
            count--;
        }
        
        if (count < 0) {
            return false;
        }

    }

    if (count > 0) {
        return false;
    }

    return true;

}

console.log(bracesValid('(){}[]'))

console.log(bracesValid('({[]})'))

console.log(bracesValid('([]})'))