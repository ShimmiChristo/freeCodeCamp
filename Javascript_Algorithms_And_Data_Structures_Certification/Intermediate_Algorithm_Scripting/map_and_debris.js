
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var t = 2 * Math.PI;
  var newArr = [];
  // notes
  // need to use JS Math Pow
  // need to use Math.sqrt()
  // need to use Math.round()
  // var radius = ((earthRadis + avgAlt)^3)/GM;
  var radius = Math.pow(earthRadius + 35873.5553,3)/GM;
  var sqrt = Math.sqrt(radius);
  var orbitPer = Math.round(t * sqrt);
  console.log(orbitPer);

  for (var i in arr) {
      newArr.push(getOrbPeriod(arr[elem]));
  }
      console.log(newArr);  
  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);