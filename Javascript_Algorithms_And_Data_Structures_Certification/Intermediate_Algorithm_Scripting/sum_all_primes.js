function sumPrimes(num) {
    // sum all the prime numbers <= num
    //if divisible by 1 and by num (itself)
    var total = 2+3+5+7;
  
    for(var i=2; i<num; i++) {
      if(i % 2 != 0 && i % 3 != 0 && i % 5 != 0 && i % 7 != 0) {
        // console.log(i);
        total = total + i;
      }
    }
    // num = total;
    console.log(total);
    // console.log(num);
  
    return num;
  }
  
  sumPrimes(10);
  sumPrimes(977);
  