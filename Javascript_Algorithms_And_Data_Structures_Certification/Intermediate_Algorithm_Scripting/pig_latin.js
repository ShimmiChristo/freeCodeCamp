function translatePigLatin (str) {
    var pigLatin = '';
    var regex = /[aeiou]/gi;

    if (str[0].match(regex)) {
        pigLatin = str + 'way';
    } 
    else if (str.match(regex) == null) {
        pigLatin = str + 'ay';
    } 
    else {
        var vowelIndex = str.indexOf(str.match(regex)[0]);
        pigLatin = str.substr(vowelIndex) + str.substr(0, vowelIndex) + 'ay';
    }
    // console.log(pigLatin);
    return pigLatin;
  }

translatePigLatin("consonant");
translatePigLatin("paragraphs");
translatePigLatin("eight");
translatePigLatin("eee");


// INTERMEDIATE CODE SOLUTION
function translatePigLatin(str) {
    function check(obj) {
        return ['a','i','u','e','o'].indexOf(str.charAt(obj)) == -1 ? check(obj + 1) : obj;
    }
  
    return str.substr(check(0)).concat((check(0) === 0 ? 'w' : str.substr(0, check(0))) + 'ay');
  }
  
  // test here
  translatePigLatin("consonant");