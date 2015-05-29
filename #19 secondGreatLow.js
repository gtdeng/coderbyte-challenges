var fx = function(arr) {
    var unique = arr.join(" ").match(/(\b\d+\b)(?!.+\b\1\b)/g);
   
    unique.sort(function(a,b) {return a-b;});
    
    if (arr.length === 2) {
        return arr[0] + " " + arr[1];
    } else {
        return unique[1] + " " + unique[unique.length-2];
    }
};

fx([7, 7, 12, 98, 106]);
//=> 12 98 //NOT 7 98


/*
#19
 Using the JavaScript language, have the function SecondGreatLow(arr) take the array of numbers stored in arr and return the second lowest and second greatest numbers, respectively, separated by a space. For example: if arr contains [7, 7, 12, 98, 106] the output should be 12 98.The array will not be empty and will contain at least 2 numbers. It can get tricky if there's just two numbers! 
*/
