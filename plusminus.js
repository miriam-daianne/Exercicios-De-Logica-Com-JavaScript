function plusMinus(arr){

    let n = arr.length;
    let pos = 0;
    let neg = 0;
    let zero = 0;

    for(let i  = 0; i < n; i++){
        if(arr[i] > 0){
            pos++;
        }else if (arr[i] < 0){
            neg++;
        }else{
            zero++;
        }
    }

    let ratioPos = pos/n;
    let ratioNeg = neg/n;
    let ratioZero = zero/n;

    ratioPos = ratioPos.toFixed(6);
    ratioNeg = ratioNeg.toFixed(6);
    ratioZero = ratioZero.toFixed(6);


    return [ratioPos, ratioNeg, ratioZero];
}

let c =[-4,3,-9,0,4,1];

console.log(plusMinus(c)[0]);
console.log(plusMinus(c)[1]);
console.log(plusMinus(c)[2]);

let d = [-3,-2,-1,1,2,3,0,0];

console.log(plusMinus(d)[0]);
console.log(plusMinus(d)[1]);
console.log(plusMinus(d)[2]);

