function telephoneCheck(str) {
    // Good luck!
    var strLen = str.length;
    var patt = /-/;
    str = str.replace(/\s/g, '');
  
  // 10 is the minimum length
    if(strLen < 10) { return false; }
  // is false if it contains a letter or special character
    if(/[^0-9()\s-]/.test(str)){ return false; } 
  // need two parentheses
    if(/[(](?=\D)/.test(str)){ return false; }
  // check to make sure the first digit is one
    if(/[02-9](?=[(])/.test(str)){ return false; }
  // if has right parenthese only
    if(/\(\w/.test(str) !== true && /\)/.test(str) ){ return false; }
  // if has left parenthese only
    if(/\(\w/.test(str) && /\)/.test(str)  !== true){ return false; }
  // if number starts with anything other than number or '(', is false 
    if (/^[^0-9\(]/.test(str) ) { return false; }
  //if last item is not number, then false
    if (/[0-9]$/.test(str) !== true) { return false; }
  // if no parentheses or hypens, and larger than 10, must start with 1
    if(/[-()]/.test(str) !== true && str.length > 10 && /^[1]/.test(str) !== true ) { return false;}
  // if no parentheses or hypens, then be less than 12
  
  
    patt.test(str);
    console.log(str);
    return true;
  
  }
  
  telephoneCheck("555-555-5555");
  telephoneCheck("5555555");
  telephoneCheck("1 555 555 5555");


  // BASIC CODE SOLUTION 
  function telephoneCheck(str) {
    var regex = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
    return regex.test(str);
 }
 telephoneCheck("555-555-5555");


//  Code Explanation:
// ^ denotes the beginning of the string.
// (1\s?)? allows for “1” or “1 ” if there is one.
// \d{n} checks for exactly n number of digits so \d{3} checks for three digits.
// x|y checks for either x OR y so (\(\d{3}\)|\d{3}) checks for either three digits surrounded by parentheses, or three digits by themselves with no parentheses.
// [\s\-]? checks for spaces or dashes between the groups of digits.
// $ denotes the end of the string. In this case the beginning ^ and end of the string $ are used in the regex to prevent it from matching any longer string that might contain a valid phone number (eg. “s 555 555 5555 3”).
// Lastly we use regex.test(str) to test if the string adheres to the regular expression, it returns true or false.
  