// no builtins besides push and pop
//punctuation should stay in place
// second function reverse word order


function word_to_array(str){
    var new_str = ''
    var arr = []
    var punctuation = ''
    for(let i =0; i < str.length; i++){
        if(str[i] == ' '){
            arr.push(new_str)
            new_str = ''
        }
        else if(i == str.length - 1){
            new_str += str[i]
            arr.push(new_str)
        }
        if(str[i] > ' ' && str[i] < 'A'){
            punctuation += str[i]
            arr.push(punctuation)
            punctuation = ''
        }
        else if(str[i] == ' '){
            continue
        }
        else{
            new_str += str[i]
        }
    }
    return arr
}

var x = word_to_array('I solemly swear. i am upto, no good!')
console.log(x)


function reverse_word(str){
    let arr = word_to_array(str)
    let temp = arr[0]
    let new_str = ''
    for(let i = 0; i<arr.length / 2; i++){
        temp = arr[i]
        arr[i] = arr[arr.length - 1 - i]
        arr[arr.length - 1 - i] = temp
    }
    for(let j = 0; j< arr.length; j++){
        if(j == arr.length - 1){
            new_str += arr[j]
        }
        else{
            new_str += arr[j] + ' '
        }
    }
    return new_str
}
var y = reverse_word('I solemly swear i am upto no good!')
console.log(y)