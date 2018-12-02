// Convert the given number into a roman numeral.

// All roman numerals answers should be provided in upper-case.


function convertToRoman(num) {
    var realNum = [ 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 ];
    var romanNum = [ 'M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I' ];

    var getRomanNum = "";
    for (var i=0; i < realNum.length; i++) {
        while (realNum[i] <= num) {
            getRomanNum += romanNum[i];
            num -= realNum[i];
        }
    }
    console.log(getRomanNum);

 return getRomanNum;
}

convertToRoman(36);
convertToRoman(2);