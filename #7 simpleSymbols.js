var fx = function(str) {
    var bool = true;
    var len = str.length;
    for (var i=0; i<len; i++) {
        var char = str.charCodeAt(i);
        if (char >=97 && char <=122) {
            if (str.charAt(i-1) !="+") {bool = false;}
            if (str.charAt(i+1) !="+") {bool = false;}
        }
    }
    return bool;     
};

fx("+d+=3=+s+");
//=> "true"

fx("f++d+" );
//=> "false"

/*
#7
 Using the JavaScript language, have the function SimpleSymbols(str)
 take the str parameter being passed and determine if it is an acceptable 
 sequence by either returning the string true or false. The str parameter 
 will be composed of + and = symbols with several letters between them 
 (ie ++d+===+c++==a) and for the string to be true each letter must be 
 surrounded by a + symbol So the string to the left would be false. 
 The string will not be empty and will have at least one letter. 
*/

