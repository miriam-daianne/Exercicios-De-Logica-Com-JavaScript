function aVeryBigSum(ar){

    let n = ar.length;
    let arraySum = 0;

    for(let i = 0; i <n; i++){
        arraySum += ar[i];
    }

    return arraySum;
}

let a = [1000000001, 1000000002, 1000000003, 1000000004, 1000000005];

console.log(aVeryBigSum(a))