var fx = function(arr) {
    var sortArr = arr.sort(function(a,b) {return a-b});
    var largest = sortArr.pop();
    
    var sum = sortArr.reduce(function(accum, value){
        return accum + value;
    },0);
    
    console.log(sum);
    return sum === largest? true: false;
    
};

fx([4, 6, 23, 10, 3]);
//=> true


/*
#17
 Using the JavaScript language, have the function ArrayAdditionI(arr) take the array of numbers stored in arr and return the string true if any combination of numbers in the array can be added up to equal the largest number in the array, otherwise return the string false. For example: if arr contains [4, 6, 23, 10, 1, 3] the output should return true because 4 + 6 + 10 + 3 = 23. The array will not be empty, will not contain all the same elements, and may contain negative numbers. 
*/
