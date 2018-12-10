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
  var change = cash - price;
  var cashStatus = {status: null, change: []};
  var register = {total: 0};

 // convert cid array in an object
  for(var i=0; i < cid.length; i++) {
    register.total += cid[i][1];
    register[cid[i][0]] = cid[i][1];
  }

// if exact change 
  if (register.total == change) {
    cashStatus.status = "CLOSED";
    cashStatus.change = cid;
    return cashStatus;
  }

// loop through changeObjects array and upadte the change and values while ther is still money of each type in the drawer and while the changeObjects value > change remaining
  var changeDue = [];
// console.log(changeObjects);
  for (var j=0; j < changeObjects.length; j++) {
    var value = 0;
    while (register[changeObjects[j].name] > 0 && change >= changeObjects[j].val) {
      change -= changeObjects[j].val;
      register[changeObjects[j].name] -= changeObjects[j].val;
      value += changeObjects[j].val;
      change = Math.round(change * 100)/100;
    }

    if (value > 0) {
    changeDue.push([changeObjects[j].name, value]);
    }
  }
// if insufficient funds
  if(change > 0 || changeDue < 1) {
    cashStatus.status = "INSUFFICIENT_FUNDS";
    return cashStatus;
  }

  // Here is your change, ma'am.
  // return change;
    cashStatus.status = 'OPEN';
    cashStatus.change = changeDue;
    return cashStatus;

  
}

checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);