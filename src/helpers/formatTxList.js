import { fetchTxList } from "./fetchTxList";

export const formatTxList = async (user) => {
  const data = await fetchTxList(user.user.user);

  var promises = [];
  var receivables = [];
  if (data != []) {
    data.forEach((element) => {
      if (element.data.newTransaction != undefined) {
        if (element.data.newTransaction.senderNumber == user.user.user) {
          element.data.newTransaction.txId = element.id;
          element.data.newTransaction.sender = true;
          promises.push(element.data.newTransaction);
        } else {
          element.data.newTransaction.txId = element.id;
          element.data.newTransaction.sender = false;
          receivables.push(element.data.newTransaction);
        }
      }
    });
  }
  const formattedData = { promises, receivables };
  return formattedData;
};
