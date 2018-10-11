function getIndexToIns(arr, num) {
    // Find my place in this sorted array.
    arr.push(num);
    function sorter(a,b) {
      if (a<b){ return -1;
      }else if (a>b) {
        return 1;
      }else {
        return 0;
      }
    }
    arr.sort(sorter);
    console.log(arr.indexOf(num));
    return arr.indexOf(num);
  }
  getIndexToIns([40,60],50);
  getIndexToIns([10,20,30,40,50],35);
  getIndexToIns([3,10,5],3);
  getIndexToIns([2,20,10],19);



  //Basic Code Solution
//   function getIndexToIns(arr, num) {
//     arr.sort(function(a, b) {
//       return a - b;
//     });
  
//     for (var a = 0; a < arr.length; a++) {
//       if (arr[a] >= num)
//         return a;
//     }
  
//     return arr.length;
//   }