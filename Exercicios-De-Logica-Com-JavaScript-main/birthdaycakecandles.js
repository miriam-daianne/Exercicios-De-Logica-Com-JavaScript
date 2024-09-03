function birthdayCakeCandles(candles){

    let highCandle = candles[0];
    let numCandles = 1;

    for (let i = 1; i < candles.length; i++) {
        if (candles[i] > highCandle) {
            highCandle = candles[i];
            numCandles = 1;
        } else if (candles[i] === highCandle) {
            numCandles++;
        }
    }

    return numCandles;
}


let e = [4,4,3,1];

console.log(birthdayCakeCandles(e));


