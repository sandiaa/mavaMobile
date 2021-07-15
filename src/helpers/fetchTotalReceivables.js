export const fetchTotalReceivables = (receivables) => {
  var sum = 0;
  receivables.forEach((element) => {
    sum = sum + parseFloat(element.amount);
  });
  return sum;
};
