import axios from "../apis/baseURL";

export const fetchTxList = async (user) => {
  var data = [];
  await axios.get(`/getTxList?number=${user}`).then(
    (res) => {
      data = res.data.message;
    },
    (err) => {}
  );

  return data;
};
