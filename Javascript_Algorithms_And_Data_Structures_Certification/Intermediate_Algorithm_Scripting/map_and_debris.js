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
  // need to delete object and then create new object
  var t = 2 * Math.PI;
  var earthRadius = 6367.4447;
  var GM = 398600.4418;

    for (var elem in arr){
          console.log(arr[elem].avgAlt);
          var avgAltitude = arr[elem].avgAlt;
          var earthOrb = Math.pow((earthRadius + avgAltitude),3);
          var solution = t * Math.sqrt(earthOrb/GM);  
          var final = Math.round(solution);
          delete arr[elem].avgAlt;
          arr[elem].orbitalPeriod = final;
  }

  return arr;
}

// orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
orbitalPeriod([{name: "iss", avgAlt: 413.6}, {name: "hubble", avgAlt: 556.7}, {name: "moon", avgAlt: 378632.553}]);


// BASIC CODE SOLUTION

function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  var a = 2 * Math.PI;
  var newArr = [];
  var getOrbPeriod = function(obj) {
    var c = Math.pow(earthRadius + obj.avgAlt, 3);
    var b = Math.sqrt(c / GM);
    var orbPeriod = Math.round(a * b);
    delete obj.avgAlt;
    obj.orbitalPeriod = orbPeriod;
    return obj;
  };

  for (var elem in arr) {
    newArr.push(getOrbPeriod(arr[elem]));
  }

  return newArr;
}

// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// INTERMEDIATE CODE SOLUTION 
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  //Looping through each key in arr object
  for(var prop in arr) {
    //Rounding off the orbital period value
    var orbitalPer = Math.round(2 * Math.PI * Math.sqrt(Math.pow(arr[prop].avgAlt + earthRadius, 3) / GM));
    //deleting the avgAlt property
    delete arr[prop].avgAlt;
    //adding orbitalPeriod property
    arr[prop].orbitalPeriod = orbitalPer;
  }

  return arr;
}

// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);


// ADVANCED CODE SOLUTION 
function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;

  // Loop through each item in the array arr
  arr.forEach(function(item) {
    // Calculate the Orbital period value
    var tmp = Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + item.avgAlt, 3) / GM));
    //Delete the avgAlt property
    delete item.avgAlt;
    //Add orbitalPeriod property
    item.orbitalPeriod = tmp;
  });
  return arr;
}

// test here
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
