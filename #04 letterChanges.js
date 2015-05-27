var fx = function(str) {
    return str.replace(/[a-zA-Z]/g,function(x) {
        return String.fromCharCode(x.charCodeAt(0)+1);})
        .replace(/[aeiou]/g, function(y) {
            return y.toUpperCase();});
};

fx("fun times!");
//=> "gvO Ujnft!"

/*
#4
 Using the JavaScript language, have the function LetterChanges(str)
 take the str parameter being passed and modify it using the 
 following algorithm Replace every letter in the string with 
 the letter following it in the alphabet (ie. c becomes d, z becomes a).
 Then capitalize every vowel in this new string (a, e, i, o, u) 
 and finally return this modified string. 
*/


