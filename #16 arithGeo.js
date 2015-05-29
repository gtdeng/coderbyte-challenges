var fx = function(arr) {
    var delta = arr[1] - arr[0];
    var epsil = arr[1] / arr[0];
    
    var D = [arr[0]];
    var G = [arr[0]];   
    
    for (var i=0; i<arr.length-1; i++) {
        D.push(arr[i]+delta);
        G.push(arr[i]*epsil);
    }
    
    //because arr !== D. need to convert to string first
    if (arr.toString() === D.toString()) {
        return "Arithmetic";
    } else if (arr.toString() === G.toString()) {
        return "Geometric";
    } else {
        return -1;
    }
    
};

fx([2, 4, 6, 8]);
//=> "Arithmetic"


/*
#16
 Using the JavaScript language, have the function ArithGeo(arr) take the array of numbers stored in arr and return the string "Arithmetic" if the sequence follows an arithmetic pattern or return "Geometric" if it follows a geometric pattern. If the sequence doesn't follow either pattern return -1. An arithmetic sequence is one where the difference between each of the numbers is consistent, where as in a geometric sequence, each term after the first is multiplied by some constant or common ratio. Arithmetic example: [2, 4, 6, 8] and Geometric example: [2, 6, 18, 54]. Negative numbers may be entered as parameters, 0 will not be entered, and no array will contain all the same elements.
*/
