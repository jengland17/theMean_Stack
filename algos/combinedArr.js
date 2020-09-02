// Create function combineArrs(arr1,arr2) that sorts two already separately sorted arrays, placing the result back into the first provided array. Can you work completely in-place?

function combineArrs(arr1, arr2) {

    let newArr = []
    let i = 0
    let j = 0

    while (i < arr1.length && j < arr2.length) {

        if (arr1[i] > arr2[j]) {
            newArr.push(arr2[j])
            j++
        } 

        else {
            newArr.push(arr1[i])
            i++
        }
    }

    while (i < arr1.length) {
        newArr.push(arr1[i])
        i++
    }

    while (j < arr2.length) {
        newArr.push(arr2[j])
        j++
    }

    return newArr

}





console.log(combineArrs([1, 2, 3, 4], [5, 6, 7, 8]))


function CA(arr1, arr2) {

    i1 = 0
    j1 = 0
    newArr = []

    while(true){

        if(arr1[i1] < arr2[j1]) {
            newArr.push(arr1[i1]);
            i1++
        }

        else {
            newArr.push(arr2[j1]);
            j1++
        }
        
        if (i1 == arr1.length || j1 == arr2.length)
        break

    }

    if (i1 < arr1.length) {
        for (let i = i1; i < arr1.length; i++) {
            newArr.push(arr1[i]);
        }
    }
    else {
        for (let i = j1; i < arr1.length; i++) {
            newArr.push(arr2[i]);
        }
    }

    return newArr;

}