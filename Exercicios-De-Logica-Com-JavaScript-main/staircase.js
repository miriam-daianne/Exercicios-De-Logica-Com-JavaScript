function staircase(n){

     for(let i = 1; i <= n; i++){

          let line= ''
          for(let j = 0; j < n-i; j++){
               line += " ";
          }

          for(let k = 0; k < i; k++){
               line += "#";
          }

          console.log(line);
          
     }

}

staircase(4);