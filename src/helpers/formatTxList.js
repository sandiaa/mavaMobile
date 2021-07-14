import { fetchTxList } from "./fetchTxList";

export const formatTxList = async (user) => {
  const data = await fetchTxList(user.number);

  var promises = [];
  var receivables = [];
  if (data != []) {
    data.forEach((element) => {
      if (element.data.newTransaction != undefined) {
        if (element.data.newTransaction.senderNumber == user.number) {
          element.data.newTransaction.assetId = element.id;
          element.data.newTransaction.sender = true;
          promises.push(element.data.newTransaction);
        } else {
          element.data.newTransaction.assetId = element.id;
          element.data.newTransaction.sender = false;
          receivables.push(element.data.newTransaction);
        }
      }
    });
  }
  const formattedData = { promises, receivables };
  return formattedData;
};
