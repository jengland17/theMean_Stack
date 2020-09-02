function insertion(arr) {

    for (var i = 0; i < arr.length; i++) {
        let temp = arr[i];
        for (var j = i - 1; j >= 0 && arr[j] > temp; j--) {
            arr[j + 1] = arr[j];
        }
        arr[j + 1] = temp;
    }
    return arr;
}


console.log(insertion([4, 3, 2, 5, 6, 7, 1]))