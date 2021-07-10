import { fetchTxList } from "./fetchTxList";

export const formatTxList = async (user) => {
  const data = await fetchTxList(user.user.user);

  var promises = [];
  var receivables = [];
  if (data != []) {
    data.forEach((element) => {
      if (element.data.newTransaction != undefined) {
        if (element.data.newTransaction.senderNumber == user.user.user) {
          promises.push(element.data.newTransaction);
        } else {
          receivables.push(element.data.newTransaction);
        }
      }
    });
  }
  const formattedData = { promises, receivables };
  return formattedData;
};
