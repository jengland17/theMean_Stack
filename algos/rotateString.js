//using regex
// 'Welcome to the Jungle' => rotate('Welcome to the Jungle', 5) => 'me to the JungleWelco'
// isRotation('I am Sam', 'Sam I am') => True isRotation('rotation', 'nope') => False


function rotate(str, num) {

    var arr = []

    for (let i = 0; i < str.length - 1; i++) {
        arr.push(str[i])
    }

    for (let j = 0; j < num; j++) {
        arr.push(arr[j])
    }

    for (let k = 0; k < num; k++) {
        arr.shift()
    }

    str = ''

    for (let l = 0; l < arr.length; l++) {
        str += arr[l]
    }

    return str

}

x = rotate('Hello World', 5)
console.log(x)

function rotate1(str, num){
    new_str = ''
    for(let i = num; i<str.length; i++){
        new_str += str[i]
    }
    for(let j = 0; j<num; j++){
        new_str += str[j]
    }
    return new_str
}



function isRotation(str1, str2) {

    if (str1.length != str2.length) {
        return false
    }
    if (str1 == str2) {
        return true
    }

    lenStr1 = str1.length

    for (let i = lenStr1 - 1; i > 0; i--) {
        let rotated = rotate(str1, i)
        if (rotated == str2){
            return true
        }
    }
    return false
}