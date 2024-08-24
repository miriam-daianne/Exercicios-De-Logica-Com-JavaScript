function plusMinus(arr) {

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


    console.log(ratioPos);
    console.log(ratioNeg);
    console.log(ratioZero);

}

let d = [-4, 3, -9, 0, 4, 1];

plusMinus(d);



