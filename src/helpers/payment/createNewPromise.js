import axios from "../../apis/baseURL";
import { v4 as uuid } from "uuid";

export const createNewPromise = (txDetails) => {
  console.log(txDetails);
  const data = {
    id: uuid().slice(0, 8),
    receiverCurrency: txDetails.receiverCurrency,
    amount: txDetails.amount,
    expiry: txDetails.dateSelected,
    description: txDetails.description,
    sender: txDetails.phone,
    receiver: txDetails.receiverNumber.replace(/[^0-9]/g, ""),
    paymentMode: txDetails.paymentMode,
  };
  console.log(data);

  //   axios
  //     .post("/createNewTx", {
  //       data,
  //     })
  //     .then(
  //       (res) => {
  //         console.log(res.data);
  //       },
  //       (err) => console.log(err)
  //     );
};
