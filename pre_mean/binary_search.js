function binarySearch(arr, x, start=0, end = arr.length-1) {

    if (start > end) { // base case 
        return -1;
    }

    let mid = Math.floor((start + end) / 2); // find the middle of the array

    if (arr[mid] === x) { // if the middle is the number return true
        return mid;
    }

    if (arr[mid] > x) {
        return binarySearch(arr, x, start, mid-1) // recursive functions to search through the array
    }

    else {
        return binarySearch(arr, x, mid+1, end);
    }

}

console.log(binarySearch([1,3,8,10,12,15,17,20,22,34,38,40,50,52,78,87,90,91,92,94,200], 93))

console.log(binarySearch([1,3,8,10,12,15,17,20,22,34,38,40,50,52,78,87,90,91,92,94,200], 15))

console.log("***********************************************")
console.log("***********************************************")

let BS = function(arr, x) {

    let start = 0, end = arr.length-1;

    while (start <= end) {

        let mid = Math.floor((start + end) / 2);

        if (arr[mid] === x) {
            return mid;
        }
        else if (arr[mid] < x) {
            start = mid + 1;
        }
        else {
            end = mid - 1;
        }
    }
    return -1;
}

console.log(BS([1,3,8,10,12,15,17,20,22,34,38,40,50,52,78,87,90,91,92,94,200], 93))

console.log(BS([1,3,8,10,12,15,17,20,22,34,38,40,50,52,78,87,90,91,92,94,200], 15))

// Time Complexity of O(logN)