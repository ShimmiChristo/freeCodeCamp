function sumPrimes(num) {
    // sum all the prime numbers <= num
    //if divisible by 1 and by num (itself)
    var total = 0;
    var primes = [2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,
        137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,
        281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,
        449,457,461,463,467,479,487,491,499,503,509,521,523,541,547,557,563,569,571,577,587,593,599,601,607,613,617,
        619,631,641,643,647,653,659,661,673,677,683,691,701,709,719,727,733,739,743,751,757,761,769,773,787,797,809,
        811,821,823,827,829,839,853,857,859,863,877,881,883,887,907,911,919,929,937,941,947,953,967,971,977,983,991,997    ];        

    for(var i=0; i<=num; i++) {    
        if(primes.indexOf(i) !== -1) {      
                total = total + i;     
        }     
                     
    }    
        num = total;    
        console.log(num);
  
    return num;
  }
  
  sumPrimes(10);
  sumPrimes(977); 
  

// --------------------------
//BASIC CODE SOLUTION
function sumPrimes(num) {
    var res = 0;
  
    // Function to get the primes up to max in an array
    function getPrimes(max) {
      var sieve = [];
      var i;
      var j;
      var primes = [];
      for (i = 2; i <= max; ++i) {
        if (!sieve[i]) {
          // i has not been marked -- it is prime
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
            sieve[j] = true;
          }
        }
      }
  
      return primes;
    }
  
    // Add the primes
    var primes = getPrimes(num);
    for (var p = 0; p < primes.length; p++) {
      res += primes[p];
    }
  
    return res;
  }
  
  // test here
  sumPrimes(10);

  // INTERMEDIATE CODE SOLUTION
  function sumPrimes(num) {
      var i;
    // function to check if the number presented is prime
    function isPrime(number){
        for (i = 2; i <= number; i++){
            if(number % i === 0 && number!= i){
            // return true if it is divisible by any number that is not itself.
               return false;
            }
         }
         // if it passes the for loops conditions it is a prime
        return true;
    }
    // 1 is not a prime, so return nothing, also stops the recursive calls.
    if (num === 1){
      return 0;
    }
    // Check if your number is not prime
    if(isPrime(num) === false){
    // for non primes check the next number down from your maximum number, do not add anything to your answer
      return sumPrimes(num - 1);
    }
  
    // Check if your number is prime
    if(isPrime(num) === true){
    // for primes add that number to the next number in the sequence through a recursive call to our sumPrimes function.
      return num + sumPrimes(num - 1);
    }
  }
  // test here
  sumPrimes(10);