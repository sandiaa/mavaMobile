import axios from "../../apis/baseURL";
import { v4 as uuid } from "uuid";

export const createNewPromise = async (txDetails) => {
  const data = {
    id: uuid().slice(0, 8),
    receiverCurrency: txDetails.receiverCurrency,
    amount: txDetails.amount,
    description: txDetails.description,
    sender: txDetails.senderNumber,
    receiver: txDetails.receiverNumber.replace(/[^0-9]/g, ""),
    paymentMode: txDetails.paymentMode,
    receiverName: txDetails.receiverName,
    expiry: txDetails.dateSelected,
  };
  var status = Boolean();
  await axios.post("/createNewTx", data).then(
    (res) => {
      status = true;
    },
    (err) => {
      status = false;
    }
  );
  return status;
};

export const createDeliverNow = async (txDetails, user) => {
  const data = {
    id: uuid().slice(0, 8),
    receiverCurrency: txDetails.receiverCurrency,
    amount: txDetails.amount,
    description: txDetails.description,
    sender: txDetails.senderNumber,
    receiver: txDetails.receiverNumber.replace(/[^0-9]/g, ""),
    paymentMode: txDetails.paymentMode,
    receiverName: txDetails.receiverName,
  };
  var status = Boolean();
  await axios.post("/createDeliverNowTx", data).then(
    (res) => {
      status = true;
    },
    (err) => {
      status = false;
    }
  );
  return status;
};
