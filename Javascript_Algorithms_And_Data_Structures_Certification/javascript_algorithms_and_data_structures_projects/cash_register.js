// Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.



function checkCashRegister(price, cash, cid) {
    var change;
  
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
  
    // Here is your change, ma'am.
    return change;
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
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);