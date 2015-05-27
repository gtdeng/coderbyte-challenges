var fx = function(num) {
   var hr  = Math.floor(num/60);
   var min = (num%60);
   return hr + ":" + min;
};

fx(126);
//=> "2:6"

/*
#9
 Using the JavaScript language, have the function TimeConvert(num) 
 take the num parameter being passed and return the number of hours 
 and minutes the parameter converts to (ie. if num = 63 then the output
 should be 1:3). Separate the number of hours and minutes with a colon. 
*/

