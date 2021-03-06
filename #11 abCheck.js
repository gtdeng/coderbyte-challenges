
var fx = function(str) {
  var arr = str.split("");
  for (var i=0; i<str.length; i++) {
    if (arr[i] === 'a') {
      if (arr[i+4] === 'b') {
        return true;
      }
    }
  }
  return false;
    
};

fx("lane borrowed");
//=> true


/*
#11
 Using the JavaScript language, have the function ABCheck(str) take the str parameter being passed and return the string true if the characters a and b are separated by exactly 3 places anywhere in the string at least once (ie. "lane borrowed" would result in true because there is exactly three characters between a and b). Otherwise return the string false. 

*/