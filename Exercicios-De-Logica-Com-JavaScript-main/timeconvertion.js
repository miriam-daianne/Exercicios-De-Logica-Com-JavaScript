function timeConvertion(s){

    let timeParts= s.split(':');
    let hours = parseInt(timeParts[0]);
    let min = timeParts[1];
    let sec = timeParts[2].slice(0,2);
    let period = timeParts[2].slice(-2);

    if(period === "PM" && hours < 12){
        hours+=12;
    }else if(period === "AM" && hours === 12){

        hours = '00';
    } else if(period == "AM" && hours < 12 ){

        hours = '0'+hours;
    }

    let newTime = hours.toString()+':'+ min +':'+ sec;

    return newTime;
}

let g = "12:01:00AM"
let f = "03:25:00PM"
let h = "04:59:59AM"
let i = "12:45:54PM"

console.log(timeConvertion(f));
console.log(timeConvertion(g));
console.log(timeConvertion(h));
console.log(timeConvertion(i));


