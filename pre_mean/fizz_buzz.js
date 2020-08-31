function fizzBuzz(arr) {

    for (let i = 0; i < arr.length; i++) {

        if (arr[i]%3 === 0 && arr[i]%5 === 0) {
            arr[i] = "FizzBuzz";
        }
        else if (arr[i]%3 === 0) {
            arr[i] = "Fizz";
        }
        else if (arr[i]%5 === 0) {
            arr[i] = "Buzz"
        }
    }
    console.log(arr);
}

fizzBuzz([1,3,5,15,12,10,4,7,23,14]);
