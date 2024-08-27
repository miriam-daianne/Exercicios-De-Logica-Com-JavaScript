function timeConvertion(time){

    let timeParts= time.split(':');
    let hours = parseInt(timeParts[0]);
    let min = timeParts[1];
    let sec = timeParts[2].slice(0,2);
    let period = timeParts[2].slice(-2);

    if(period === "PM" && hours < 12){
        hours+=12;
    }

    let newTime = hours.toString()+':'+ min +':'+ sec;

    return newTime;
}

let f = "03:25:00PM"

console.log(timeConvertion(f));

// falhas nos demais testes 