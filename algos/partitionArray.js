// Partition unsorted array in-place. Use arr[0] as pivot val; return idx of pivot. Input [5,4,9,2,5,3] becomes [4,2,3,5,9,5], return 4.

// make a temp variable to store value of the pivot
// need to loop through the array to determine which values are less than the pivot 
// if pivot is greater than the value next to it switch positions with that var



function partArray(arr) {

    pivot = arr[0];

    for (let i = 0; i < arr.length; i++) {

        for (let j = 0; j < arr.length; j++) {

            if (pivot > arr[i]) {

                [arr[i], arr[j]] = [arr[j], arr[i]]

            }
        }
    }

    return arr;


}


console.log(partArray([5, 4, 9, 2, 5, 3]));