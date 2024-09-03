function appleAndOranges(a, b, s, t, apples, oranges){

    let newApples = [];
    let newOranges = [];


    let numApples = 0;
    let numOranges =0;


    for(let i = 0; i < apples.length; i++){

        newApples[i] = a + apples[i];     
        
    }

    for(let i = 0; i < oranges.length; i++){

        newOranges[i] = b + oranges[i];       
    }

    for(let i = 0; i< newApples.length; i++){
        if(newApples[i] >= s && newApples[i] <= t){
            numApples++;
        }
    }

    for(let i = 0; i< newOranges.length; i++){
        if(newOranges[i] >= s && newOranges[i] <= t){
            numOranges++;
        }
    }


    console.log(numApples);
    console.log(numOranges);

}

appleAndOranges(5, 15, 7, 11, [-2,2,1], [5,-6]);




