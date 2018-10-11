// Compare two arrays and return a new array with any items only found in one of the two given arrays, but not both. 
// In other words, return the symmetric difference of the two arrays.

function diffArray(arr1, arr2) {
    var newArr = [];
    var max = Math.max(arr1.length, arr2.length);
    var min = Math.min(arr1.length, arr2.length);
    // Same, same; but different.
    arr1.forEach(function(e) {
      if(arr2.indexOf(e) === -1) {
        newArr.push(e);
      } else {
        console.log('nothing to see here');
      }
    });
    arr2.forEach(function(e) {
      if(arr1.indexOf(e) === -1) {
        newArr.push(e);
      } else {
        console.log('nothing to see here');
      }
    });
    return newArr;
  }
  
  // diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
  diffArray(["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"]);


// ----------------------
//   BASIC SOLUTION

function diffArray(arr1, arr2) {
    var newArr = [];

    function onlyInFirst(first, second) {
    // Looping through an array to find elements that don't exist in another array
      for (var i=0;i<first.length;i++) {
        if (second.indexOf(first[i]) === -1) {
          // Pushing the elements unique to first to newArr
          newArr.push(first[i]);
        }
      }
    }

    onlyInFirst(arr1, arr2);
    onlyInFirst(arr2, arr1);

    return newArr;
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

// ----------------------
//   INTERMEDIATE SOLUTION

function diffArray(arr1, arr2) {
    return arr1
      .concat(arr2)
      .filter(
          item => !arr1.includes(item) || !arr2.includes(item)
      )
  }

  diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);

