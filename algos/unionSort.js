// Efficiently combine two already sorted arrays into a new sorted array containing


function union(arr1, arr2) {

    temp = []
    lastIndex = 0

    for (let i = 0, j = lastIndex; i < arr1.length && j < arr2.length; i++, j++) {
        if (arr1[i] == arr2[j]) {
            temp += arr1[i]
            console.log(temp)
            lastIndex = j + 1;
        }
        else if (arr1[i] != arr2[j]) {
            console.log(temp)
            temp += arr2[j];
        }
    }
    return temp
}

array1 = [1, 2, 3, 4, 5, 6]
array2 = [1, 2, 2, 3, 7, 8]

console.log(union(array1, array2))