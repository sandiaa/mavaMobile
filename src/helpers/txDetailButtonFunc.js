import axios from "../apis/baseURL";

export const txDetailButtonFunc = async (buttonName, item) => {
  switch (buttonName) {
    case "accept":
      const acceptResult = await acceptTx(item);
      return acceptResult;
    case "reject":
      const rejectResult = await rejectTx(item);
      return rejectResult;
    case "submit":
      const submitResult = await submitTx(item);
      return submitResult;
    case "done":
      const doneResult = await doneTx(item);
      return doneResult;
    case "rework":
      const reworkResult = await reworkTx(item);
      return reworkResult;
  }
};

const acceptTx = async (item) => {
  var accepted = Boolean();
  await axios
    .post("/acceptTx", {
      id: item.txId,
      assetId: item.assetId,
      sender: item.receiverNumber,
      receiver: item.receiverNumber,
    })
    .then(
      (res) => {
        accepted = true;
      },
      (err) => {
        accepted = false;
      }
    );
  return accepted;
};

const rejectTx = async (item) => {
  var rejected = Boolean();
  await axios
    .post("/rejectTx", {
      id: item.txId,
      assetId: item.assetId,
      sender: item.receiverNumber,
    })
    .then(
      (res) => {
        rejected = true;
      },
      (err) => {
        rejected = false;
      }
    );
  return rejected;
};
const submitTx = async (item) => {
  var submitted = Boolean();
  await axios
    .post("/reviewTx", {
      id: item.txId,
      assetId: item.assetId,
      sender: item.receiverNumber,
      receiver: item.senderNumber,
    })
    .then(
      (res) => {
        submitted = true;
      },
      (err) => {
        submitted = false;
      }
    );
  return submitted;
};
const doneTx = async (item) => {
  var done = Boolean();
  await axios
    .post("/deliverTx", {
      id: item.txId,
      assetId: item.assetId,
      sender: item.senderNumber,
    })
    .then(
      (res) => {
        done = true;
      },
      (err) => {
        done = false;
      }
    );
  return done;
};
const reworkTx = async (item) => {
  var rework = Boolean();
  await axios
    .post("/reviewNotSuccess", {
      id: item.txId,
      assetId: item.assetId,
      sender: item.senderNumber,
      receiver: item.receiverNumber,
    })
    .then(
      (res) => {
        rework = true;
      },
      (err) => {
        rework = false;
      }
    );
  return rework;
};
