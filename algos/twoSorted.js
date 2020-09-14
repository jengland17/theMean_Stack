function sortedArrs(arr1,arr2) {

    var newArr = []
    lastIndex = 0

    for (i = 0; i < arr1.length; i++) {
        for (j = lastIndex; j < arr2.length; j++) {
            if (arr1[i] == arr2[j]) {
                newArr.push(arr2[j]);
                lastIndex = j + 1;
            }
        }
    }
    
    return newArr
}

console.log(sortedArrs([1,2,2,2,7], [2,2,6,6,7]))