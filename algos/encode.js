//encode
// 'aaaaaaaaabbbbbbccccccccccceeeefff' => 'a9b6c10e4f3'
// parseInt(text, #)

function encode(str) {

    var new_str = ''
    var counter = 0

    for (let i = 0; i < str.length; i++) {
        if (str[i] != str[i + 1]) {
            counter++
            new_str += str[i]
            new_str += counter
            counter = 0
        }
        else {
            counter++
        }
    }
    return new_str
}

console.log(encode('aaaaaaaaabbbbbbcccccccccceeeefff'))


//decode
// ''a9b6c10e4f3' => 'aaaaaaaaabbbbbbccccccccccceeeefff'


function decode(str) {

    var new_str = ''
    var num = 0
    var temp = ''
    
    for (let i = 0; i < str.length; i++) {
        if (str[i] < 'A') {
            num_string = str[i]
            while (str[i + 1] < 'A') {
                num_string += str[i + 1]
                i++
            }
            num = parseInt(num_string)
            for (let j = 0; j < num; j++) {
                new_str += temp
            }
        }
        else {
            temp = str[i]
        }
    }
    return new_str
}

console.log(decode('a9b6c10e4f3'))