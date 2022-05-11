/** @format */

function balance(openingSum, interestRate, taxFreeLimit, taxRate, numMonths) {
  let balance = openingSum;
  let interest = 0;
  let monthlyTax = 0;
  for (let i = 1; i <= numMonths; i++) {
    interest = balance * (interestRate / 100);
    if (balance > taxFreeLimit) {
      monthlyTax = (balance - taxFreeLimit) * (taxRate / 100);
    } else {
      monthlyTax = 0;
    }
    balance += interest - monthlyTax;
  }
  return balance;
}

console.log(balance(19800, 2, 20000, 1, 2));
