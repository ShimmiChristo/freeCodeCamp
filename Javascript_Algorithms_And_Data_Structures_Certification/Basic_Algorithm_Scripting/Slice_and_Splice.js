function frankenSplice(arr1, arr2, n) {
  // It's alive. It's alive!
  var arr2Copy = [...arr2];
  arr2Copy.splice(n, 0, arr1);
  console.log(arr2Copy);

  return arr2Copy;
}


// Basic Code Solution
function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
     //create a copy
    let localArray = arr2.slice();
    //itterate through every item of the first array and splice to the copy array
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    console.log(localArray);
    return localArray;
  }
  
  frankenSplice([1, 2, 3], [4, 5, 6], 1);
  frankenSplice(["claw", "tentacle"], ["head", "shoulders", "knees", "toes"], 2);