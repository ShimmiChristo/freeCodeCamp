// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
// cid is a 2D array listing available currency.
// The checkCashRegister() function should always return an object with a status key and a change key.
// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.
// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.
// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.

 // NOTES
 // price, payment, cash-in-drawer
 // checkCashRegister() should always return an object
 // 1. check if the register has enough funds
 // 2. if have enough change, return the change due 
 
 
 var changeObjects = [
    { name: 'ONE HUNDRED', val: 100.00},
    { name: 'FIFTY', val: 50.00},
    { name: 'TWENTY', val: 20.00},
    { name: 'TEN', val: 10.00},
    { name: 'FIVE', val: 5.00},
    { name: 'ONE', val: 1.00},
    { name: 'QUARTER', val: 0.25},
    { name: 'DIME', val: 0.10},
    { name: 'NICKEL', val: 0.05},
    { name: 'PENNY', val: 0.01},
  ];



function checkCashRegister(price, cash, cid) {

  var changeDue = cash - price;
  var cashStatus = {status: null, change: []};
  var total = 0;
  // console.log(changeDue);



  for(var i=0; i < cid.length; i++) {
    // console.log(cid[i][1]);
    total += cid[i][1];
    // console.log(total);
  }
        // for (var i in cid[0]) {
        //   console.log();
        //   // obj.hasOwnProperty() is used to filter out properties from the object's prototype chain
        //   if (changeObjects.hasOwnProperty(i)) {
        //   //  console.log(changeObjects[i].val);
        //    total += changeObjects[i].val;
        //   }
        // }
        // console.log(currentRegister);
        // console.log(total);
        // console.log(change);

// if insufficient funds
  if (total < changeDue) {
    cashStatus.status = "INSUFFICIENT_FUNDS";
  } 
  if (total == changeDue) {
    cashStatus.status = "CLOSED";
  }

  // Here is your change, ma'am.
  // return change;
    return cashStatus;
  
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.1],
// ["QUARTER", 4.25],
// ["ONE", 90],
// ["FIVE", 55],
// ["TEN", 20],
// ["TWENTY", 60],
// ["ONE HUNDRED", 100]]

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);