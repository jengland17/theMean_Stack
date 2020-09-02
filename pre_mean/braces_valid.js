function bracesValid(str) {


    var matches = { '(': ')', '{': '}', '[': ']' };
    var arr = [];
    var currentChar;

    for (var i = 0; i < str.length; i++) {

        currentChar = str[i];

        if (matches[currentChar]) {
            arr.push(currentChar);
        } 

        else { 
            if (currentChar !== matches[arr.pop()]) {
                return false;
            }
        }
    }

    return arr.length === 0; 
}

console.log(bracesValid('(){}[]'))

console.log(bracesValid('({[]})'))

console.log(bracesValid('([]})'))

console.log(bracesValid('{(})'))