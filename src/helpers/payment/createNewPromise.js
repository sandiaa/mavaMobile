import axios from "../../apis/baseURL";
import { v4 as uuid } from "uuid";

export const createNewPromise = async (txDetails, user) => {
  const data = {
    id: uuid().slice(0, 8),
    receiverCurrency: txDetails.receiverCurrency,
    amount: txDetails.amount,
    expiry: txDetails.dateSelected,
    description: txDetails.description,
    sender: user,
    receiver: txDetails.receiverNumber.replace(/[^0-9]/g, ""),
    paymentMode: txDetails.paymentMode,
  };
  var status = Boolean();
  await axios.post("/createNewTx", data).then(
    (res) => {
      console.log(res.data);
      status = true;
    },
    (err) => {
      status = false;
    }
  );
  return status;
};
