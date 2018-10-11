function mutation(arr) {
    var arrWord1 = arr[0].toLowerCase();
    var arrWord2 = arr[1].toLowerCase();
    var splitArr1 = arr[0].split('');
    var splitArr2 = arr[1].split('');
    for (var i=0; i<arrWord2.length;i++) {
      if(arrWord1.indexOf(arrWord2[i]) <0) {
        return false;
      }
    }
  
    return true;
  }
  
  mutation(["hello", "hey"]);


  //Basic Code Solutions
//   function mutation(arr) {
//     var test = arr[1].toLowerCase();
//     var target = arr[0].toLowerCase();
//     for (var i=0;i<test.length;i++) {
//       if (target.indexOf(test[i]) < 0)
//         return false;
//     }
//     return true;
//    }