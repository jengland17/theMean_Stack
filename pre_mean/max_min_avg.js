function maxMinAvg(arr){

    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (let i = 0; i < arr.length; i++){

        if (max < arr[i]){
            max = arr[i];
        }

        if (min > arr[i]){
            min = arr[i];
        }

        sum = sum + arr[i]; 

    }

    var avg = sum/arr.length;
    var newArr = [max, min, avg];

    console.log(newArr)
    return newArr;
}

maxMinAvg([1,4,7,8,10,5])