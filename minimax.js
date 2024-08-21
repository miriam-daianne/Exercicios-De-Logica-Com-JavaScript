function minMaxSum(arr){

    let min = arr[0];
    let max = arr[0];
    let sum = 0;
    let minSum = 0;
    let maxSum = 0;
    let n = arr.length;

    for(let i = 0; i < n; i++){

        sum += arr[i];

        if(arr[i] > max){

            max = arr[i];
        }

        if( arr[i] < min){

            min = arr[i];

        }

    }


    minSum = sum - max;
    maxSum = sum - min;
    

    console.log(minSum + " " + maxSum);

}


let e = [1,2,3,4,5];
console.log(minMaxSum(e));