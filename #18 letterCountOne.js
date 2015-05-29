var fx = function(str) {
    var res = str.split(' ');
      var max = 0;
      var cnt = 0;
      var word= '';
      
      //# of words in the array
      for (var i=0; i<res.length; i++){ //start1
         
        //# of chars in each word/element in the array
        for (var j=0; j<res[i].length; j++){ //start2
            
          for (var k=1; k<res[i].length; k++){
            //for each char in the word, compare it to the next char.
            //dont need to look backwards. it doesnt matter
            //if there's a match, increase the counter.
            if(res[i][j] == res[i][j+k]){
                //if the nth letter is the same as the n+1th letter
              cnt += 1;
            }      }    } //end2
            
        //after every word, update this::::  
        if (cnt>max){
          max = cnt;
          cnt = 0;
          word = res[i];
        }
        } //end1
            
      if (max === 0){
        word = '-1';
      }
      
      return word; 
};

fx("Today, is the greatest day ever!");
//=> greatest


/*
#18
  Using the JavaScript language, have the function LetterCountI(str) take the str parameter being passed and return the first word with the greatest number of repeated letters. For example:"Today, is the greatest day ever!" should return greatest because it has 2 e's (and 2 t's) and it comes before ever which also has 2 e's. If there are no words with repeating letters return -1. Words will be separated by spaces. 
*/
