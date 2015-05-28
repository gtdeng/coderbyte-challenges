var fx = function(str) {
    var numX = str.replace(/[x]/g, "").length;
    var numO = str.replace(/[o]/g, "").length;

    return numX === numO? true: false;
};

fx("xooxxxxooxo");
//=> false


/*
#14
 Using the JavaScript language, have the function ExOh(str) take the str parameter being passed and return the string true if there is an equal number of x's and o's, otherwise return the string false. Only these two letters will be entered in the string, no punctuation or numbers. For example: if str is "xooxxxxooxo" then the output should return false because there are 6 x's and 5 o's. 
*/
