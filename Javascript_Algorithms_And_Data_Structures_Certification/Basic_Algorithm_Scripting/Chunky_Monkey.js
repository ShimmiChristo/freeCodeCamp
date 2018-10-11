function chunkArrayInGroups(arr, size) {
    // Break it up.
    var newArr = [];
    var slice; 
    for (var i=0; i<arr.length; i+=size) {
      newArr.push(arr.slice(i,size+i));
    }
    return newArr;
  }
  
  chunkArrayInGroups(["a", "b", "c", "d"], 2);

//   Basic Code Solution
// function chunkArrayInGroups(arr, size) {

//     var temp = [];
//     var result = [];

//     for (var a = 0; a < arr.length; a++) {
//       if (a % size !== size - 1)
//         temp.push(arr[a]);
//       else {
//         temp.push(arr[a]);
//         result.push(temp);
//         temp = [];
//       }
//     }

//     if (temp.length !== 0)
//       result.push(temp);
//     return result;
//   }


// Intermediate Code Solution 
// function chunkArrayInGroups(arr, size) {
//     // Break it up.
//     var arr2 = [];
//     for (var i = 0; i < arr.length; i+=size) {
//       arr2.push(arr.slice(i , i+size));
//     }
//     return arr2;
//   }