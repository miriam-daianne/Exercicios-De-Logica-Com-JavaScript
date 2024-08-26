function birthdayCakeCandles(candles){

    let highCandle = 0;
    let numCandles = 0;


    for(let i = 0; i < candles.length; i++){
        if(candles[i] > highCandle){
            highCandle = candles[i];
        }
    }

    for(let i = 0; candles.length; i++){
        if(highCandle == candles[i]){
            numCandles++;
        }
    }
    return numCandles;
}


let e = [4,4,3,1];

console.log(birthdayCakeCandles(e));


//  não ta passando nos demais testes 