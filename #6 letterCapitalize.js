var fx = function(str) {
  return str.replace(/\b[\w]/g, function(x) {
      return x.toUpperCase();
  });
};

fx("hello world");
//=> "Hello World"

/*
#6
 Using the JavaScript language, have the function LetterCapitalize(str) 
 take the str parameter being passed and capitalize the first letter
 of each word. Words will be separated by only one space. 
*/

