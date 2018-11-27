function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var t = 2 * Math.PI;
  // notes
  // need to use JS Math Pow
  // need to use Math.sqrt()
  // need to use Math.round()
  // var radius = ((earthRadis + avgAlt)^3)/GM;
  var radius = Math.pow(earthRadius + 35873.5553,3)/GM;
  var sqrt = Math.sqrt(radius);

  console.log(Math.round(t * sqrt));

  return arr;
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);