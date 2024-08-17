function diagonalDifference(arr){

    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secundaryDiagonalSum = 0;
    let differenceFinal = 0;

    for(let i = 0; i < n; i++){
        primaryDiagonalSum += arr[i][i];
        secundaryDiagonalSum += arr[i][n-i-1];
    }

    return differenceFinal = Math.abs(primaryDiagonalSum - secundaryDiagonalSum)

}


let a = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
]
console.log(diagonalDifference(a));