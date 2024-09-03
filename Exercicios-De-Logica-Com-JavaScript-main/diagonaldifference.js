function diagonalDifference(arr){

    let n = arr.length;
    let primaryDiagonalSum = 0;
    let secondaryDiagonalSum = 0;
   

    for(let i = 0; i < n; i++){
        primaryDiagonalSum += arr[i][i];
        secondaryDiagonalSum += arr[i][n-i-1];
    }

    // let differenceFinal = primaryDiagonalSum - secondaryDiagonalSum;

    // if(differenceFinal < 0){
    //     differenceFinal = differenceFinal * (-1);
    // }

    // return differenceFinal;

    return Math.abs(primaryDiagonalSum - secondaryDiagonalSum);

}


let b = [
    [11,2,4],
    [4,5,6],
    [10,8,-12]
];

console.log(diagonalDifference(b));