
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



function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var firstElem = arr;
  var newArr = [];
  // getting orbital period formula
  // Math.PI 
  // Math.pow
  // Math.sqrt
  // Math.round
  var t = 2 * Math.PI;
  var earthRadius = 6367.4447;
  var GM = 398600.4418;

  for(var i=0; i<arr.length; i++){
    var newObj = arr[i];
    for (var elem in newObj){
        // console.log(elem);
        // console.log(newObj[elem]);
        if (elem == 'avgAlt') {
          // console.log(newObj[elem]);
          var avgAltitude = newObj[elem];
          var earthOrb = Math.pow((earthRadius + avgAltitude),3);
          var solution = t * Math.sqrt(earthOrb/GM);  
          // console.log(Math.round(solution));
          newObj[elem] = Math.round(solution);
          console.log(elem = 'orbitalPeriod');
          // return (newObj[elem]);
          // newArr.push(newObj[elem]);
        }
    }
  }
  for (var j=0;j<arr.length;j++) {
    // console.log(arr[j]);
    var doubleX = arr[j];
    for (var x in doubleX){
      console.log(x);
      // console.log(doubleX[x]);
    }
  }
  // console.log(arr);
  return arr;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);