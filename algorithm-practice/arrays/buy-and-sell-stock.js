/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and
choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction.
If you cannot achieve any profit, return 0.

*/

var maxProfit = function (prices) {
  let buyingPrice = prices[0];
  let sellingPrice;
  let profit = 0;

  for (let i = 1; i < prices.length; i++) {
    sellingPrice = prices[i];
    if (buyingPrice > sellingPrice) {
      buyingPrice = sellingPrice;
    } else {
      profit = Math.max(sellingPrice - buyingPrice, profit);
    }
  }
  return profit;
};

console.log('maxProfit([7, 1, 5, 3, 6, 4])', maxProfit([7, 1, 5, 3, 6, 4]))
console.log('maxProfit([7, 6, 4, 3, 1])', maxProfit([7, 6, 4, 3, 1]))
