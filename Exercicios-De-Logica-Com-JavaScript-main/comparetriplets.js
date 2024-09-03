function compareTriplets(a,b){

    let alice = 0;
    let bob = 0;

    for(let i = 0; i <3; i++){

        if(a[i]>b[i]){
            alice++;
        }else if(a[i]<b[i]){
            bob++
        }
    }
     
    return [alice,bob];

}

let x =[5,6,7];
let y =[3,6,10];

console.log(compareTriplets(x,y));

let m = [17,28,30];
let j = [99,16,8];

console.log(compareTriplets(m,j));
