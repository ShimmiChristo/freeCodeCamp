function findElement(arr, func) {
  for (var i=0; i < arr.length; i++) {
    if (func(arr[i]) == true) {
      return arr[i];
    } 
  }
  // return num;
}

findElement([1, 2, 3, 5, 7, 9, 10], num => num % 2 === 0);



// function findElement(arr, func) {
//   let num = 0;
  
//   for(var i = 0; i < arr.length; i++) {
//     num = arr[i];
//     if (func(num)) {
//       return num;
//     }
//   }
  
//   return undefined;
// }