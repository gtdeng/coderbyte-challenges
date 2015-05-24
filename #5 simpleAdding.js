var fx = function(num) {
    if (num<1) {
        return 0; 
    } else {
        return num += fx(num-1);
    }
};

fx(12);
//=> 78

/*
#5
 Using the JavaScript language, have the function SimpleAdding(num)
 add up all the numbers from 1 to num.For the test cases, 
 the parameter num will be any number from 1 to 1000. 
*/

