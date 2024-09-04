function gradingStudents(grades){


    let newGradesModified = [];

    for(let i = 0; i < grades.length; i++){

        let multiple;

        if(grades[i] % 5 === 0){

            multiple = grades[i];
        } else{

            multiple = grades[i] + (5 - (grades[i] % 5));
        }


        if( grades[i] < 38){
            var newGrades = grades[i];

        } else if((multiple - grades[i]) >=3){
            var newGrades = grades[i];

        }else if((multiple - grades[i]) < 3){
            var newGrades = multiple;
        }
        newGradesModified.push(newGrades);
    }

    return newGradesModified;

}

console.log(gradingStudents([73,67,38,33]));

