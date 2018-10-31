function sumFibs(num) {
    // return only odds. Use num%2 ==0;
    // add all numbers to a variable
    // Fibonacci numbers add the previous two numbers
    var oldNum = 0;
    var newNum = 1;
    var thirdNum = oldNum + newNum;
    var total = 0;

    while (newNum <= num) {
      if(newNum % 2 !== 0) {
        total = total + newNum;
      }
      newNum = newNum + oldNum;
      oldNum = newNum - oldNum;
      // console.log(newNum);
      // console.log(oldNum);
    }
      // console.log(total);
      
    return total; 
  }
  
  sumFibs(1000);