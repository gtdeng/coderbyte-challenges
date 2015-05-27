var fx = function(num) {
    return num === 1? 1:num*fx(num-1);
};

fx(4);
//=> 24

/*
#2
 Using the JavaScript language, have the function FirstFactorial(num) 
 take the num parameter being passed and return the factorial of it 
 (ie. if num =4, return (4 * 3 * 2 * 1)). 
 For the test cases, the range will be between 1 and 18. 
*/

