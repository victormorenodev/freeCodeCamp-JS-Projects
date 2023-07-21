function checkCashRegister(price, cash, cid) {
    const virginCid = cid.map(item => ([ ...item ]));
    const coinsAndBills = [["PENNY", 0.01], ["NICKEL", 0.05], ["DIME", 0.10], ["QUARTER", 0.25], ["DOLLAR", 1.00], ["FIVE ", 5.00], ["TEN", 10.00], ["TWENTY", 20.00], ["HUNDRED", 100.00]];
    for (let i = 0; i < cid.length; i++) {
      cid[i][2] = coinsAndBills[i][1];
    }
    let currencyChange = parseFloat(cash-price.toFixed(2));
    let currencyChangeUntouched = 0;
    const cashInDrawer = parseFloat(cid.reduce((accumulator, currentValue) => accumulator + currentValue[1], 0).toFixed(2));
    let status = "";
    let change = [];
    cid.reverse();
    let changeValue = 0;
    for (let i = 0; i < cid.length; i++) {
      if (cid[i][2] <= currencyChange) {
        let sum = 0;
        while(cid[i][1] > 0 && parseFloat((sum + cid[i][2]).toFixed(2)) <= currencyChange) {
          sum += cid[i][2];
          cid[i][1] -= cid[i][2];
        }
        currencyChange -= sum;
        currencyChange = parseFloat(currencyChange.toFixed(2));
        if (sum > 0) { 
          change.push([cid[i][0], parseFloat(sum.toFixed(2))]); 
          currencyChangeUntouched += parseFloat(sum.toFixed(2));
        }
      }
    }
    if (currencyChangeUntouched < currencyChange || cashInDrawer < currencyChange) {
      status = "INSUFFICIENT_FUNDS";
      change = [];
    } else if (currencyChangeUntouched == cashInDrawer) {
      status = "CLOSED";
      change = virginCid;
    }
    else {
      status = "OPEN";
    }
    return { status, change };
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));