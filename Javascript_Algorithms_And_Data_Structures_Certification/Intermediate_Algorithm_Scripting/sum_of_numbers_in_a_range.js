// We'll pass you an array of two numbers. Return the sum of those two numbers plus the sum of all the numbers between them.
// The lowest number will not always come first.

function sumAll(arr) {
    var smallest = Math.min(...arr);
    var largest = Math.max(...arr);
    var sum = 0;
    for (var i=largest-1; i > smallest; i-- ) {
      console.log(i);
      sum = sum + i;
  
    }
    // console.log(sum);
  
    return sum + smallest + largest;
  }
  
  sumAll([1, 4]);


//   BASIC CODE SOLUTION
// function sumAll(arr) {
//     var max = Math.max(arr[0], arr[1]);
//     var min = Math.min(arr[0], arr[1]);
//     var temp = 0;
//     for (var i=min; i <= max; i++){
//         temp += i;
//     }
//   return(temp);
// }

// sumAll([1, 4]);