var fx = function(str) {
    var vowels  = /[aeiou]/;
    var counter = 0;
    
    for (var i=0; i<str.length; i++) {
        if (vowels.test(str[i])) {
            counter++;
        }
    }
    return counter;
};

fx("hello");
//=> 2


/*
#12
Using the JavaScript language, have the function VowelCount(str) take the str string parameter being passed and return the number of vowels the string contains (ie. "All cows eat grass" would return 5). Do not count y as a vowel for this challenge. 

*/