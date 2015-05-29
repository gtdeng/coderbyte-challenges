var fx = function(num1, num2) {
    var quot = Math.floor(num1/num2) + "";
    var result = "";
    
    for (var i=quot.length-1; i>=0; i--) {
        if (i !== quot.length -1 && (quot.length -i-1) %3 === 0) {
            result = "," + result;
        }
        result = quot[i] + result;
    }
    return result;
};

fx(123456789, 10000);
//=> "12,345"


/*
#20
 Using the JavaScript language, have the function DivisionStringified(num1,num2 take both parameters being passed, divide num1 by num2, and return the result as a string with properly formatted commas. If an answer is only 3 digits long, return the number with no commas (ie. 2 / 3 should output "1"). For example: if num1 is 123456789 and num2 is 10000 the output should be "12,345".
*/
