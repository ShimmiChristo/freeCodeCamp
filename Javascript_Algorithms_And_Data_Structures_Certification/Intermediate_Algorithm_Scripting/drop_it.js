function dropElements(arr, func) {
  // Drop them elements.
  return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; });


function dropElements(arr, func) {
// Drop them elements.
for (var i =0; i<arr.length; i++) {
    if (func (i) == false) {

}
}

return arr;
}

dropElements([1, 2, 3], function(n) {return n < 3; }); 